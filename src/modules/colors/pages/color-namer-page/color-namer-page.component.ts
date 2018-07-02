import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { SelectChoices } from '../../../controls/select/select.component';
import { colorDistanceMetrics, ColorDistanceMetric } from '../../color-distance/color-distance-metrics';
import { ColorDistanceService } from '../../color-distance/color-distance.service';
import { ClosestNamedColorsService } from '../../color-names/closest-named-colors.service';
import { ColorValueData } from '../../generic/color-value';
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
    ColorDistanceService,
    ClosestNamedColorsService
  ]
})
export class ColorNamerPageComponent {

  public colorMetricChoices: SelectChoices = colorMetricChoices;

  public colorMetric: ColorDistanceMetric = ColorDistanceMetric.CIEDE2000;

  public colorValueData = new BehaviorSubject<ColorValueData>(null);

  public get colorValue(): ColorValueData {
    return this.colorValueData.getValue();
  }

  public get closestColors(): Observable<NamedColor[]> {
    return this.colorValueData.pipe(
      map(value => {
        if (!value) {
          return [];
        }
        return this.closestNamedColorsService.get(value, this.colorMetric);
      })
    );
  }

  constructor(
    public closestNamedColorsService: ClosestNamedColorsService
  ) {}

}
