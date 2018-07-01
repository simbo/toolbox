import { ColorsModule } from './colors.module';

describe('ColorsModule', () => {
  let colorsModule: ColorsModule;

  beforeEach(() => {
    colorsModule = new ColorsModule();
  });

  it('should create an instance', () => {
    expect(colorsModule).toBeTruthy();
  });
});
