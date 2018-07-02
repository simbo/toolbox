import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { SelectChoices } from '../../../controls/select/select.component';
import { colorDistanceMetrics, ColorDistanceMetric } from '../../color-distance/color-distance-metrics';
import { ColorDistanceService } from '../../color-distance/color-distance.service';
import { ClosestNamedColorsService } from '../../color-names/closest-named-colors.service';
import { NamedColor } from '../../named-color/named-color.interface';
import { ColorData } from '../../generic/color-data.interface';

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

  public colorDataSubject = new BehaviorSubject<ColorData>(null);

  public get colorData(): ColorData {
    return this.colorDataSubject.getValue();
  }

  public get closestColors(): Observable<NamedColor[]> {
    return this.colorDataSubject.pipe(
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
