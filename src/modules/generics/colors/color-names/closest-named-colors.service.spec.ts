import { TestBed, inject } from '@angular/core/testing';

import { ClosestNamedColorsService } from './closest-named-colors.service';

describe('ClosestColorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClosestNamedColorsService]
    });
  });

  it('should be created', inject([ClosestNamedColorsService], (service: ClosestNamedColorsService) => {
    expect(service).toBeTruthy();
  }));
});
