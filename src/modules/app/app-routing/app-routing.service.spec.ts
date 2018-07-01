import { TestBed, inject } from '@angular/core/testing';

import { AppRoutingService } from './app-routing.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppRoutingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AppRoutingService
      ]
    });
  });

  it('should be created', inject([AppRoutingService], (service: AppRoutingService) => {
    expect(service).toBeTruthy();
  }));
});
