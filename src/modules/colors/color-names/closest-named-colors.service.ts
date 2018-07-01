import { Injectable } from '@angular/core';

import { NamedColor, colorNames } from './color-names';
import { ColorValueData } from '../generic/color-value';
import { ColorDistanceMetric, colorDistanceMetrics } from '../color-distance/color-metrics';

const closestNamedColorsCache = new Map<string, NamedColor[]>();
const colorDistanceCache = new Map<string, number>();

@Injectable()
export class ClosestNamedColorsService {

  public namedColors: NamedColor[] = colorNames;

  constructor() {
  }

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
        const distanceA = this.getColorDistance(colorA.value, colorValue, colorMetric);
        const distanceB = this.getColorDistance(colorB.value, colorValue, colorMetric);
        if (distanceA > distanceB) { return 1; }
        if (distanceA < distanceB) { return -1; }
        if (colorA.name > colorB.name) { return 1; }
        if (colorA.name < colorB.name) { return -1; }
        return 0;
      });
  }

  public getColorDistance(
    colorA: ColorValueData,
    colorB: ColorValueData,
    colorMetric: ColorDistanceMetric
  ): number {
    const cacheKey = `${colorA.hex}${colorB.hex}${colorMetric}`;
    let distance = colorDistanceCache.get(cacheKey);
    if (distance === undefined) {
      const metric = colorDistanceMetrics[colorMetric];
      distance = metric.fn(colorA[metric.model], colorB[metric.model]);
      colorDistanceCache.set(cacheKey, distance);
    }
    return distance;
  }

  public sortedColorsTrackBy(index: number, value: NamedColor): string {
    return value.name;
  }

}
