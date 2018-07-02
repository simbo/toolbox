import { Injectable } from '@angular/core';

import { ColorValueData } from '../generic/color-value';
import { ColorDistanceMetric } from '../color-distance/color-distance-metrics';
import { ColorDistanceService } from '../color-distance/color-distance.service';
import { NamedColor } from '../named-color/named-color.interface';
import { colorNames } from './color-names';

const closestNamedColorsCache = new Map<string, NamedColor[]>();

@Injectable()
export class ClosestNamedColorsService {

  public namedColors: NamedColor[] = colorNames;

  constructor(
    public colorDistanceService: ColorDistanceService
  ) {}

  public get(
    colorValue: ColorValueData,
    colorMetric: ColorDistanceMetric,
    limit: number = 0
  ): NamedColor[] {
    const cacheKey = `${colorValue.hex}${colorMetric}`;
    let closestColors = closestNamedColorsCache.get(cacheKey);
    if (!closestColors) {
      closestColors = this.getSortedColors(colorValue, colorMetric);
      closestNamedColorsCache.set(cacheKey, closestColors);
    }
    return limit ? closestColors.slice(0, limit) : closestColors;
  }

  private getSortedColors(
    colorValue: ColorValueData,
    colorMetric: ColorDistanceMetric
  ): NamedColor[] {
    return this.namedColors.slice(0)
      .sort((colorA, colorB) => {
        const distanceA = this.colorDistanceService
          .get(colorA.value, colorValue, colorMetric);
        const distanceB = this.colorDistanceService
          .get(colorB.value, colorValue, colorMetric);
        if (distanceA > distanceB) { return 1; }
        if (distanceA < distanceB) { return -1; }
        if (colorA.name > colorB.name) { return 1; }
        if (colorA.name < colorB.name) { return -1; }
        return 0;
      });
  }

  public sortedColorsTrackBy(index: number, value: NamedColor): string {
    return value.name;
  }

}
