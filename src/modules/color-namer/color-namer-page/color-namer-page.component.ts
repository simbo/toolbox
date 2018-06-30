import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ColorDistanceMetric, colorDistanceMetrics} from '../../generics/colors/color-distance/color-metrics';
import { SelectChoices } from '../../controls/select/select.component';
import { ColorValue } from '../../generics/colors/color-value';
import { randomColor } from '../../generics/colors/random-color';
import { ClosestNamedColorsService } from '../../generics/colors/color-names/closest-named-colors.service';
import { NamedColor } from '../../generics/colors/color-names/color-names';

export const colorMetricChoices: SelectChoices =
  Object.entries(colorDistanceMetrics)
    .map(([value, metric]) => ({
      value,
      label: metric.name
    }));

@Component({
  selector: 'c-color-namer-page',
  templateUrl: './color-namer-page.component.pug',
  styleUrls: ['./color-namer-page.component.scss'],
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
    this.colorValue.hex = value;
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
