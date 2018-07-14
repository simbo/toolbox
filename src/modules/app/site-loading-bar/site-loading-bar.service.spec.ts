import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingService } from '../app-routing/app-routing.service';
import { SiteLoadingBarService } from './site-loading-bar.service';

describe('SiteLoadingBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AppRoutingService,
        SiteLoadingBarService
      ]
    });
  });

  it('should be created', inject([SiteLoadingBarService], (service: SiteLoadingBarService) => {
    expect(service).toBeTruthy();
  }));
});
