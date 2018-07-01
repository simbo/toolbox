import { StringsModule } from './strings.module';

describe('StringsModule', () => {
  let stringsModule: StringsModule;

  beforeEach(() => {
    stringsModule = new StringsModule();
  });

  it('should create an instance', () => {
    expect(stringsModule).toBeTruthy();
  });
});
