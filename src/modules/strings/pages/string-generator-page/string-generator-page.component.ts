import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import * as uniqueRandomArray from 'unique-random-array';
import * as arrayShuffle from 'array-shuffle';
import * as arrayUnique from 'array-unique';
import * as randomItem from 'random-item';

interface CharacterGroup {
  name: string;
  characters: string[];
  selected: BehaviorSubject<boolean>;
}

@Component({
  selector: 'c-string-generator-page',
  templateUrl: './string-generator-page.component.pug'
})
export class StringGeneratorPageComponent implements OnInit {

  public readonly characterGroups: CharacterGroup[] = [
    {
      name: 'A-Z',
      characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      selected: new BehaviorSubject(true)
    },
    {
      name: 'a-z',
      characters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
      selected: new BehaviorSubject(true)
    },
    {
      name: '0-9',
      characters: '0123456789'.split(''),
      selected: new BehaviorSubject(true)
    },
    {
      name: 'special',
      characters: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split(''),
      selected: new BehaviorSubject(false)
    }
  ];

  public readonly characters: BehaviorSubject<string> = new BehaviorSubject('');
  public readonly customCharacters: BehaviorSubject<string> = new BehaviorSubject('');
  public readonly outputLengthInput: BehaviorSubject<string> = new BehaviorSubject('32');
  public readonly outputLength: BehaviorSubject<number> = new BehaviorSubject(0);
  public readonly avoidRepetition: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public readonly output: BehaviorSubject<string> = new BehaviorSubject('');

  public ngOnInit(): void {

    combineLatest<any[]>(
      this.customCharacters,
      ...this.characterGroups.map(group => group.selected)
    ).pipe(
      map(([customCharacters, ...selectionStates]) =>
        this.getCharacters(customCharacters, ...selectionStates)
      ),
      filter(characters => characters !== this.characters.getValue())
    ).subscribe((characters: string) => this.characters.next(characters));

    this.outputLengthInput.pipe(
      filter(input => /^[0-9]+$/.test(input)),
      map(input => Math.min(Math.max(parseInt(input, 10), 0), 99999)),
      filter(length => length !== this.outputLength.getValue())
    ).subscribe(length => this.outputLength.next(length));

    combineLatest(
      this.characters,
      this.outputLength,
      this.avoidRepetition
    ).pipe(
      map(([characters, length, avoidRepetition]) =>
        this.getRandomString(characters, length, avoidRepetition)
      )
    ).subscribe((output: string) => this.output.next(output));

  }

  public generate(): void {
    const characters = this.characters.getValue();
    const length = this.outputLength.getValue();
    const avoidRepetition = this.avoidRepetition.getValue();
    const output = this.getRandomString(characters, length, avoidRepetition);
    this.output.next(output);
  }

  public getCharacters(customCharacters: string, ...selectionStates: boolean[]): string {
    const charactersPool = selectionStates.reduce<string[]>((characters, characterGroupSelected, i) => {
      if (characterGroupSelected) {
        characters.push(...this.characterGroups[i].characters);
      }
      return characters;
    }, []).concat(customCharacters.split(''));
    return arrayUnique(charactersPool).join('');
  }

  public getRandomString(characters: string, length: number, avoidRepetition: boolean): string {
    if (!characters.length) {
      return '';
    }
    const charactersPool = arrayShuffle(characters.split(''));
    const randomCharacter: () => string = avoidRepetition ?
      uniqueRandomArray(charactersPool) : () => randomItem(charactersPool);
    const output = [];
    while (output.length < length) {
      output.push(randomCharacter());
    }
    return output.join('');
  }

}
