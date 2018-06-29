import { Component } from '@angular/core';

import { hashAlgorithms, HashAlgorithm } from '../hash/hash-algorithms';
import { hashEncodings, HashEncoding } from '../hash/hash-encodings';
import { Hash } from '../hash/hash';

@Component({
  selector: 'c-hash-generator-page',
  templateUrl: './hash-generator-page.component.pug',
  styleUrls: ['./hash-generator-page.component.scss']
})
export class HashGeneratorPageComponent {

  public algorithms: {[key: string]: string} = hashAlgorithms;

  public algorithm: HashAlgorithm = HashAlgorithm.SHA256;

  public encodings: {[key: string]: string} = hashEncodings;

  public encoding: HashEncoding = HashEncoding.Hex;

  public input: string = '';

  public get output(): string {
    if (!this.input || this.input === '') {
      return '';
    }
    const hash = new Hash(this.algorithm);
    hash.set(this.input);
    return hash.get(this.encoding);
  }

}
