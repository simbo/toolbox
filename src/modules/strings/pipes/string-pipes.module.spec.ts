import { StringPipesModule } from './string-pipes.module';

describe('StringPipesModule', () => {
  let stringPipesModule: StringPipesModule;

  beforeEach(() => {
    stringPipesModule = new StringPipesModule();
  });

  it('should create an instance', () => {
    expect(stringPipesModule).toBeTruthy();
  });
});
