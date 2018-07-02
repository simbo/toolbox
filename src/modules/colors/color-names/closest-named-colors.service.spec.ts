import { TestBed, inject } from '@angular/core/testing';

import { ColorDistanceService } from '../color-distance/color-distance.service';
import { ClosestNamedColorsService } from './closest-named-colors.service';

describe('ClosestColorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ColorDistanceService,
        ClosestNamedColorsService
      ]
    });
  });

  it('should be created', inject([ClosestNamedColorsService], (service: ClosestNamedColorsService) => {
    expect(service).toBeTruthy();
  }));
});
