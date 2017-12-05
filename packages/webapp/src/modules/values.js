// @flow
import type { Artifact } from '../types';

type TypesType = { [string]: string };

export const Types: TypesType = {
  CHART: 'chart',
  VALUES: 'values',
  XSCALE: 'xscale',
  YSCALE: 'yscale'
};

export const ChartType: TypesType = {
  AREA: 'area',
  BAR: 'bar'
};

export const YScaleType: TypesType = {
  LINEAR: 'linear',
  POW: 'pow'
};

export const XScaleType: TypesType = {
  TIME: 'time',
  COMMIT: 'commit'
};

export const ValueType: TypesType = {
  STAT: 'stat',
  GZIP: 'gzip'
};

export const TypesEnum: { [string]: TypesType } = {
  [Types.CHART]: ChartType,
  [Types.VALUES]: ValueType,
  [Types.XSCALE]: XScaleType,
  [Types.YSCALE]: YScaleType
};

export const valueTypeAccessor = {
  [ValueType.STAT]: (d: Artifact): number => (d && d.size) || 0,
  [ValueType.GZIP]: (d: Artifact): number => (d && d.gzipSize) || 0
};
