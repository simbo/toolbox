import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { hashAlgorithms, HashAlgorithm } from '../../hash/hash-algorithms';
import { hashEncodings, HashEncoding } from '../../hash/hash-encodings';
import { Hash } from '../../hash/hash';
import { SelectChoices } from '../../../controls/select/select.component';


const algorithmChoices: SelectChoices = Object.entries(hashAlgorithms)
  .reduce((algorithms, [label, value]) => ([
    ...algorithms,
    { label, value }
  ]), []);


const encodingChoices: SelectChoices = Object.entries(hashEncodings)
  .reduce((encodings, [label, value]) => ([
    ...encodings,
    { label, value }
  ]), []);


@Component({
  selector: 'c-hash-generator-page',
  templateUrl: './hash-generator-page.component.pug'
})
export class HashGeneratorPageComponent implements OnInit {

  public algorithms: SelectChoices = algorithmChoices;
  public encodings: SelectChoices = encodingChoices;

  public input = new BehaviorSubject<string>('');
  public algorithm = new BehaviorSubject<HashAlgorithm>(HashAlgorithm.SHA256);
  public encoding = new BehaviorSubject<HashEncoding>(HashEncoding.Hex);
  public salt = new BehaviorSubject<string>('');
  public saltEnabled = new BehaviorSubject<boolean>(false);
  public saltPosition = new BehaviorSubject<string>('append');
  public saltSeparator = new BehaviorSubject<string>(':');

  public hashContent = new BehaviorSubject<string>('');
  public output = new BehaviorSubject<string>('');

  public saltPositionChoices: SelectChoices = [
    {
      label: 'prepend Salt',
      value: 'prepend'
    },
    {
      label: 'append Salt',
      value: 'append'
    }
  ];

  public ngOnInit(): void {

    combineLatest(
      this.input,
      this.salt,
      this.saltEnabled,
      this.saltPosition,
      this.saltSeparator
    ).pipe(
      map(([input, salt, saltEnabled, saltPosition, saltSeparator]) =>
        this.combineHashContent(input, salt, saltEnabled, saltPosition, saltSeparator)
      ),
      filter(hashContent => hashContent !== this.hashContent.getValue())
    ).subscribe((hashContent) => this.hashContent.next(hashContent));

    combineLatest(
      this.hashContent,
      this.algorithm,
      this.encoding
    ).pipe(
      map(([input, algorithm, encoding]) => this.generateHash(input, algorithm, encoding))
    ).subscribe((output) => this.output.next(output));

  }

  public combineHashContent(
    input: string,
    salt: string,
    saltEnabled: boolean,
    saltPosition: string,
    saltSeparator: string
  ): string {
    const parts = [input];
    if (saltEnabled && salt && salt.length > 0) {
      parts[saltPosition === 'prepend' ? 'unshift' : 'push'](salt);
    }
    return parts.join(saltSeparator);

  }

  public generateHash(
    input: string,
    algorithm: HashAlgorithm = HashAlgorithm.SHA256,
    encoding: HashEncoding = HashEncoding.Hex
  ): string {
    const hash = new Hash(algorithm);
    hash.set(input);
    return hash.get(encoding);
  }

}
