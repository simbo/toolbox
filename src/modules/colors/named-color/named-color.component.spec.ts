import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NamedColorComponent } from './named-color.component';
import { StringsModule } from '../../strings/strings.module';
import { ColorDistanceService } from '../color-distance/color-distance.service';
import { ColorValue } from '../generic/color-value';
import { NamedColor } from './named-color.interface';

describe('NamedColorComponent', () => {
  let component: NamedColorComponent;
  let fixture: ComponentFixture<NamedColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StringsModule
      ],
      declarations: [
        NamedColorComponent
      ],
      providers: [
        ColorDistanceService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with color input', () => {
    const colorValue = new ColorValue('#f00');
    const namedColor: NamedColor = {
      name: 'Red',
      data: colorValue.data
    };
    component.color = namedColor;
    expect(component).toBeTruthy();
  });
});
