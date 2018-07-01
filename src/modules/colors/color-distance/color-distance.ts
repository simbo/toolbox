import * as Color from 'color';

import { ColorModel } from '../generic/color-models';
import { ColorDistanceMetric } from './color-metrics';
import { colorDistanceSimple } from './color-distance-simple';
import { colorDistanceCIE76 } from './color-distance-cie76';
import { colorDistanceCIE94 } from './color-distance-cie94';
import { colorDistanceCIEDE2000 } from './color-distance-ciede2000';
import { colorDistanceEuclidian } from './color-distance-euclidian';

export function colorDistance(
  colorA: Color | string | number[],
  colorB: Color | string | number[],
  metric: ColorDistanceMetric = ColorDistanceMetric.Euclidean,
  model: ColorModel = ColorModel.RGB
): number {
  if (!(colorA instanceof Color)) {
    colorA = new Color(colorA, model);
  }
  if (!(colorB instanceof Color)) {
    colorB = new Color(colorB, model);
  }
  switch (metric) {
    case ColorDistanceMetric.Simple:
      return colorDistanceSimple(colorA.array(), colorB.array());
    case ColorDistanceMetric.CIE76:
      return colorDistanceCIE76(colorA.lab().array(), colorB.lab().array());
    case ColorDistanceMetric.CIE94:
      return colorDistanceCIE94(colorA.lab().array(), colorB.lab().array());
    case ColorDistanceMetric.CIEDE2000:
      return colorDistanceCIEDE2000(colorA.lab().array(), colorB.lab().array());
    case ColorDistanceMetric.Euclidean:
    default:
      return colorDistanceEuclidian(
        colorA.array(),
        colorB.array()
      );
  }
}
