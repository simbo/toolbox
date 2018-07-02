import * as Color from 'color';

import { ColorModel } from './color-models';
import { randomColor } from './random-color';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ColorValueData {
  color: Color;
  hex: string;
  rgb: number[];
  lab: number[];
}

export class ColorValue {

  private static valueCache = new Map<string, ColorValueData>();

  private _value = new BehaviorSubject<ColorValueData>(null);

  constructor(
    value: string | number[] = null,
    model: ColorModel = ColorModel.RGB
  ) {
    if (value === null) {
      value = randomColor().rgb().array();
      model = ColorModel.RGB;
    }
    const color = new Color(value, model);
    this.setColor(color);
  }

  public get observable(): Observable<ColorValueData> {
    return this._value.asObservable();
  }

  public get value(): ColorValueData {
    return this._value.getValue();
  }

  public get color(): Color {
    return this.value.color;
  }

  public set color(value: Color) {
    this.setColor(value);
  }

  public get hex(): string {
    return this.value.hex;
  }

  public set hex(value: string) {
    const color = new Color(value, ColorModel.Hex);
    this.setColor(color);
  }

  public get rgb(): number[] {
    return this.value.rgb;
  }

  public set rgb(value: number[]) {
    const color = new Color(value, ColorModel.RGB);
    this.setColor(color);
  }

  public get lab(): number[] {
    return this.value.lab;
  }

  public set lab(value: number[]) {
    const color = new Color(value, ColorModel.LAB);
    this.setColor(color);
  }

  private setColor(val: Color | string): void {
    let color: Color;
    let hex: string;
    if (val instanceof Color) {
      color = val;
      hex = color.rgb().hex();
    } else {
      hex = val;
    }
    if (this.value !== null && this.value.hex === hex) { return; }
    let value = ColorValue.valueCache.get(hex);
    if (!value) {
      if (!color) {
        color = new Color(hex, ColorModel.Hex);
      }
      const lab = color.lab();
      value = {
        color,
        hex,
        rgb: color.array(),
        lab: lab.array()
      };
      ColorValue.valueCache.set(hex, value);
    }
    this._value.next(value);
  }

}
