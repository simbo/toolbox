import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNamerPageComponent } from './color-namer-page.component';

describe('ColorNamerPageComponent', () => {
  let component: ColorNamerPageComponent;
  let fixture: ComponentFixture<ColorNamerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorNamerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorNamerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
