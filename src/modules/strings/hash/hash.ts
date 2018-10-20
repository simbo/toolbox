import * as createHash from 'create-hash/browser';

import { HashAlgorithm } from './hash-algorithms';
import { HashEncoding } from './hash-encodings';

export class Hash {

  private readonly hash: any;

  constructor(
    public readonly algorithm: HashAlgorithm,
    data: string = null
  ) {
    this.hash = createHash(this.algorithm);
    if (data !== null) {
      this.set(data);
    }
  }

  public set(data: string): Hash {
    this.hash.update(data);
    return this;
  }

  public get(encoding: HashEncoding): string {
    return this.hash.digest(encoding);
  }

}
