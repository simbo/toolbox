import { HashGeneratorModule } from './hash-generator.module';

describe('HashGeneratorModule', () => {
  let hashGeneratorModule: HashGeneratorModule;

  beforeEach(() => {
    hashGeneratorModule = new HashGeneratorModule();
  });

  it('should create an instance', () => {
    expect(hashGeneratorModule).toBeTruthy();
  });
});
