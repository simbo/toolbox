import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SelectChoices } from '../../../controls/select/select.component';
import { colorDistanceMetrics, ColorDistanceMetric } from '../../color-distance/color-distance-metrics';
import { ClosestNamedColorsService } from '../../color-names/closest-named-colors.service';
import { ColorValue } from '../../generic/color-value';
import { randomColor } from '../../generic/random-color';
import { stringToRgb } from '../../convert/string-to-rgb';
import { stringToHex } from '../../convert/string-to-hex';
import { NamedColor } from '../../named-color/named-color.interface';

export const colorMetricChoices: SelectChoices =
  Object.entries(colorDistanceMetrics)
    .map(([value, metric]) => ({
      value,
      label: metric.name
    }));

@Component({
  selector: 'c-color-namer-page',
  templateUrl: './color-namer-page.component.pug',
  providers: [
    ClosestNamedColorsService
  ]
})
export class ColorNamerPageComponent {

  public colorMetricChoices: SelectChoices = colorMetricChoices;

  public colorMetric: ColorDistanceMetric = ColorDistanceMetric.CIEDE2000;

  public colorValue = new ColorValue();

  public _input: string = null;

  public get input(): string {
    return this._input === null ? this.colorValue.hex : this._input;
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

  public get closestColors(): Observable<NamedColor[]> {
    return this.colorValue.observable.pipe(
      map(value => this.closestNamedColorsService.get(value, this.colorMetric))
    );
  }

  constructor(
    public closestNamedColorsService: ClosestNamedColorsService
  ) {}

  public getColorDistance(color: NamedColor): number {
    return this.closestNamedColorsService
      .getColorDistance(color.value, this.colorValue.value, this.colorMetric);
  }

  public setRandomColor() {
    this.input = randomColor().hex();
  }

}
