import { TestBed, inject } from '@angular/core/testing';

import { ColorDistanceService } from './color-distance.service';

describe('ColorDistanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorDistanceService]
    });
  });

  it('should be created', inject([ColorDistanceService], (service: ColorDistanceService) => {
    expect(service).toBeTruthy();
  }));
});
