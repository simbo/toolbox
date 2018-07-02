import { Component, Input } from '@angular/core';

import { ColorDistanceService } from '../color-distance/color-distance.service';
import { ColorDistanceMetric } from '../color-distance/color-distance-metrics';
import { ColorValue } from '../generic/color-value';
import { NamedColor } from './named-color.interface';

@Component({
  selector: 'c-named-color',
  templateUrl: './named-color.component.pug'
})
export class NamedColorComponent {

  @Input() public color: NamedColor;

  @Input() public compareColor: ColorValue;

  @Input() public compareMetric: ColorDistanceMetric;

  constructor(
    public colorDistanceService: ColorDistanceService
  ) {}

  public get compareMode(): boolean {
    return !!this.compareColor && !!this.compareMetric;
  }

  public get colorDistance(): number {
    if (!this.compareMode) {
      return null;
    }
    return this.colorDistanceService
      .get(this.color.value, this.compareColor.value, this.compareMetric);
  }

}
