import { Component } from '@angular/core';

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
export class HashGeneratorPageComponent {

  public algorithms: SelectChoices = algorithmChoices;
  public algorithm: HashAlgorithm = HashAlgorithm.SHA256;
  public encodings: SelectChoices = encodingChoices;
  public encoding: HashEncoding = HashEncoding.Hex;

  public input: string = '';

  public salt: string = '';

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

  public saltPosition: string = 'append';
  public saltSeparator: string = ':';

  public get output(): string {
    if (!this.input || this.input === '') {
      return '';
    }
    const hash = new Hash(this.algorithm);
    hash.set(this.inputWithSalt);
    return hash.get(this.encoding);
  }

  public get inputWithSalt(): string {
    if (!this.input || this.input === '') {
      return '';
    }
    const parts = [this.input];
    if (this.salt && this.salt.length > 0) {
      parts[this.saltPosition === 'prepend' ? 'unshift' : 'push'](this.salt);
    }
    return parts.join(this.saltSeparator);
  }

}
