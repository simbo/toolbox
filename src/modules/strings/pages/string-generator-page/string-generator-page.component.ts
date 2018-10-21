import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as uniqueRandomArray from 'unique-random-array';
import * as arrayShuffle from 'array-shuffle';
import * as arrayUnique from 'array-unique';

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
  public readonly output: BehaviorSubject<string> = new BehaviorSubject('');

  public ngOnInit(): void {

    combineLatest(
      this.customCharacters,
      ...this.characterGroups.map(group => group.selected),
      this.getCharacters.bind(this)
    ).subscribe((characters: string) => {
      if (characters !== this.characters.getValue()) {
        this.characters.next(characters);
      }
    });

    this.outputLengthInput.subscribe(input => {
      if (!/^[0-9]+$/.test(input)) {
        return;
      }
      const length = Math.min(Math.max(parseInt(input, 10), 0), 99999);
      if (length !== this.outputLength.getValue()) {
        this.outputLength.next(length);
      }
    });

    combineLatest(
      this.characters,
      this.outputLength,
      this.getRandomString.bind(this)
    ).subscribe((output: string) => this.output.next(output));

  }

  public generate(): void {
    const characters = this.characters.getValue();
    const length = this.outputLength.getValue();
    const output = this.getRandomString(characters, length);
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

  public getRandomString(characters: string, length: number): string {
    if (!characters.length) {
      return '';
    }
    const charactersPool = arrayShuffle(characters.split(''));
    const randomCharacter: () => string = uniqueRandomArray(charactersPool);
    const output = [];
    while (output.length < length) {
      output.push(randomCharacter());
    }
    return output.join('');
  }

}
