import { TestBed, inject } from '@angular/core/testing';

import { AppRoutingService } from './app-routing.service';

describe('AppRoutingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppRoutingService]
    });
  });

  it('should be created', inject([AppRoutingService], (service: AppRoutingService) => {
    expect(service).toBeTruthy();
  }));
});
