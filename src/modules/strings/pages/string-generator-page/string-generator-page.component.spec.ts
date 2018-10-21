import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StringGeneratorPageComponent } from './string-generator-page.component';

describe('StringGeneratorPageComponent', () => {
  let component: StringGeneratorPageComponent;
  let fixture: ComponentFixture<StringGeneratorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StringGeneratorPageComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
