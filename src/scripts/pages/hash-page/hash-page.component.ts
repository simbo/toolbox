import { Component, Provide, Vue } from 'vue-property-decorator';
import { Hash } from '../../modules/hash/hash';
import { hashAlgorithms, HashAlgorithm } from '../../modules/hash/hash-algorithms';
import { hashEncodings, HashEncoding } from '../../modules/hash/hash-encodings';

@Component({
  template: require('./hash-page.component.pug')
})
export class HashPageComponent extends Vue {

  @Provide()
  public algorithms: {[key: string]: string} = hashAlgorithms;

  @Provide()
  public algorithm: HashAlgorithm = HashAlgorithm.SHA256;

  @Provide()
  public encodings: {[key: string]: string} = hashEncodings;

  @Provide()
  public encoding: HashEncoding = HashEncoding.Hex;

  @Provide()
  public input: string = '';

  @Provide()
  public get output(): string {
    if (!this.input || this.input === '') {
      return '';
    }
    const hash = new Hash(this.algorithm);
    hash.set(this.input);
    return hash.get(this.encoding);
  }

}
