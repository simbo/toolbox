import { ColorNamerModule } from './color-namer.module';

describe('ColorNamerModule', () => {
  let colorNamerModule: ColorNamerModule;

  beforeEach(() => {
    colorNamerModule = new ColorNamerModule();
  });

  it('should create an instance', () => {
    expect(colorNamerModule).toBeTruthy();
  });
});
