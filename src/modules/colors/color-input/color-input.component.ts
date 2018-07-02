import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Output() public color = new EventEmitter<ColorData>();

  public colorValue = new ColorValue();

  private _input: string = null;

  public get input(): string {
    return this._input === null ?
      this.colorValue.hex.toLowerCase() : this._input;
  }

  public set input(value: string) {
    this._input = value;
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

  public ngOnInit(): void {
    this.colorValue.observable.subscribe(colorData => {
      this.color.emit(colorData);
    });
  }

  public setRandomColor() {
    this.input = randomColor().hex().toLowerCase();
  }

}
