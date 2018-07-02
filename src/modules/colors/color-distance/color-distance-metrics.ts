import { ColorModel } from '../generic/color-models';
import { colorDistanceSimple } from './color-distance-simple';
import { colorDistanceEuclidian } from './color-distance-euclidian';
import { colorDistanceCIE76 } from './color-distance-cie76';
import { colorDistanceCIE94 } from './color-distance-cie94';
import { colorDistanceCIEDE2000 } from './color-distance-ciede2000';

export enum ColorDistanceMetric {
  Simple = 'simple',
  Euclidean = 'euclidian',
  CIE76 = 'cie76',
  CIE94 = 'cie94',
  CIEDE2000 = 'ciede2000'
}

export const colorDistanceMetrics = {
  [ColorDistanceMetric.Simple]: {
    name: 'Simple',
    fn: colorDistanceSimple,
    model: ColorModel.RGB
  },
  [ColorDistanceMetric.Euclidean]: {
    name: 'Euclidian',
    fn: colorDistanceEuclidian,
    model: ColorModel.RGB
  },
  [ColorDistanceMetric.CIE76]: {
    name: 'CIE76',
    fn: colorDistanceCIE76,
    model: ColorModel.LAB
  },
  [ColorDistanceMetric.CIE94]: {
    name: 'CIE94',
    fn: colorDistanceCIE94,
    model: ColorModel.LAB
  },
  [ColorDistanceMetric.CIEDE2000]: {
    name: 'CIEDE2000',
    fn: colorDistanceCIEDE2000,
    model: ColorModel.LAB
  }
};
