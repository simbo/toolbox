import { GenericsModule } from './generics.module';

describe('GenericsModule', () => {
  let genericsModule: GenericsModule;

  beforeEach(() => {
    genericsModule = new GenericsModule();
  });

  it('should create an instance', () => {
    expect(genericsModule).toBeTruthy();
  });
});
