import { Injectable } from '@angular/core';

import { ColorDistanceMetric, colorDistanceMetrics } from './color-distance-metrics';
import { ColorData } from '../generic/color-data.interface';

const colorDistanceCache = new Map<string, number>();

@Injectable()
export class ColorDistanceService {

  public get(
    colorA: ColorData,
    colorB: ColorData,
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
