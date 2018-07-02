import { Injectable } from '@angular/core';

import { ColorValueData } from '../generic/color-value';
import { ColorDistanceMetric, colorDistanceMetrics } from './color-distance-metrics';

const colorDistanceCache = new Map<string, number>();

@Injectable()
export class ColorDistanceService {

  public get(
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

}
