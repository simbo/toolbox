import { Component, Input } from '@angular/core';

import { ClosestNamedColorsService } from '../color-names/closest-named-colors.service';
import { NamedColor } from '../color-names/color-names';
import { ColorValue } from '../generic/color-value';
import { ColorDistanceMetric } from '../color-distance/color-metrics';

@Component({
  selector: 'c-named-color',
  templateUrl: './named-color.component.pug'
})
export class NamedColorComponent {

  @Input() public color: NamedColor;

  @Input() public compareColor: ColorValue;

  @Input() public compareMetric: ColorDistanceMetric;

  constructor(
    public closestNamedColorsService: ClosestNamedColorsService
  ) {}

  public get compareMode(): boolean {
    return !!this.compareColor && !!this.compareMetric;
  }

  public get colorDistance(): number {
    if (!this.compareMode) {
      return null;
    }
    return this.closestNamedColorsService
      .getColorDistance(this.color.value, this.compareColor.value, this.compareMetric);
  }

}
