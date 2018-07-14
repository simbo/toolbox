import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingService } from '../app-routing/app-routing.service';
import { SiteLoadingBarComponent } from './site-loading-bar.component';
import { SiteLoadingBarService } from './site-loading-bar.service';

describe('SiteLoadingBarComponent', () => {
  let component: SiteLoadingBarComponent;
  let fixture: ComponentFixture<SiteLoadingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SiteLoadingBarComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        AppRoutingService,
        SiteLoadingBarService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
