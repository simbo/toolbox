import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ColorData } from '../generic/color-data.interface';
import { ColorValue } from '../generic/color-value';
import { stringToRgb } from '../convert/string-to-rgb';
import { stringToHex } from '../convert/string-to-hex';
import { randomColor } from '../generic/random-color';

@Component({
  selector: 'c-color-input',
  templateUrl: './color-input.component.pug'
})
export class ColorInputComponent implements OnInit {

  @Output('color') public colorEmitter = new EventEmitter<ColorData>();

  public colorValue = new ColorValue();

  public readonly input: BehaviorSubject<string>;

  constructor() {
    this.input = new BehaviorSubject<string>(
      this.colorValue.hex.toLowerCase()
    );
  }

  public ngOnInit(): void {
    this.input.subscribe(input => {
      this.setColorValue(input);
    });
    this.colorValue.observable.subscribe(colorData => {
      this.colorEmitter.emit(colorData);
    });
  }

  public setColorValue(value: string) {
    const rgb = stringToRgb(value);
    if (rgb) {
      this.colorValue.rgb = rgb;
      return;
    }
    const hex = stringToHex(value);
    if (hex) {
      this.colorValue.hex = hex;
    }
  }

  public setRandomColor() {
    const hex = randomColor().hex().toLowerCase();
    this.input.next(hex);
  }

}
