import { BehaviorSubject, Observable } from 'rxjs';
import * as Color from 'color';

import { ColorModel } from './color-models';
import { randomColor } from './random-color';
import { ColorData } from './color-data.interface';

/**
 * ColorValue
 * offers an observable color value providing precalculated values for
 * different color modals while trying to minimize calculations using
 * a global color data cache.
 */
export class ColorValue {

  private static dataCache = new Map<string, ColorData>();

  private _data = new BehaviorSubject<ColorData>(null);

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

  public get observable(): Observable<ColorData> {
    return this._data.asObservable();
  }

  public get data(): ColorData {
    return this._data.getValue();
  }

  public get color(): Color {
    return this.data.color;
  }

  public set color(value: Color) {
    this.setColor(value);
  }

  public get hex(): string {
    return this.data.hex;
  }

  public set hex(value: string) {
    const color = new Color(value, ColorModel.Hex);
    this.setColor(color);
  }

  public get rgb(): number[] {
    return this.data.rgb;
  }

  public set rgb(value: number[]) {
    const color = new Color(value, ColorModel.RGB);
    this.setColor(color);
  }

  public get lab(): number[] {
    return this.data.lab;
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
    if (this.data !== null && this.data.hex === hex) { return; }
    let value = ColorValue.dataCache.get(hex);
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
      ColorValue.dataCache.set(hex, value);
    }
    this._data.next(value);
  }

}
