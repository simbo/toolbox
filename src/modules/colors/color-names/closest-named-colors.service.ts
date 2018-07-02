import { Injectable } from '@angular/core';

import { ColorDistanceMetric } from '../color-distance/color-distance-metrics';
import { ColorDistanceService } from '../color-distance/color-distance.service';
import { NamedColor } from '../named-color/named-color.interface';
import { colorNames } from './color-names';
const closestNamedColorsCache = new Map<string, NamedColor[]>();
import { ColorData } from '../generic/color-data.interface';

@Injectable()
export class ClosestNamedColorsService {

  public namedColors: NamedColor[] = colorNames;

  constructor(
    public colorDistanceService: ColorDistanceService
  ) {}

  public get(
    colorData: ColorData,
    colorMetric: ColorDistanceMetric,
    limit: number = 0
  ): NamedColor[] {
    let closestColors = closestNamedColorsCache.get(cacheKey);
    const cacheKey = `${colorData.hex}${colorMetric}`;
    if (!closestColors) {
      closestNamedColorsCache.set(cacheKey, closestColors);
      closestColors = this.getSortedColors(colorData, colorMetric);
    }
    return limit ? closestColors.slice(0, limit) : closestColors;
  }

  private getSortedColors(
    colorData: ColorData,
    colorMetric: ColorDistanceMetric
  ): NamedColor[] {
    return this.namedColors.slice(0)
      .sort((colorA, colorB) => {
        const distanceA = this.colorDistanceService
          .get(colorA.data, colorData, colorMetric);
        const distanceB = this.colorDistanceService
          .get(colorB.data, colorData, colorMetric);
        if (distanceA > distanceB) { return 1; }
        if (distanceA < distanceB) { return -1; }
        if (colorA.name > colorB.name) { return 1; }
        if (colorA.name < colorB.name) { return -1; }
        return 0;
      });
  }

  public trackBy(index: number, value: NamedColor): string {
    return value.name;
  }

}
