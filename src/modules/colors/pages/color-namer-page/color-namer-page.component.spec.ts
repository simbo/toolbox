import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ColorNamerPageComponent } from './color-namer-page.component';
import { StringsModule } from '../../../strings/strings.module';

describe('ColorNamerPageComponent', () => {
  let component: ColorNamerPageComponent;
  let fixture: ComponentFixture<ColorNamerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StringsModule
      ],
      declarations: [
        ColorNamerPageComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
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
