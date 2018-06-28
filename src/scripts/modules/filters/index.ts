import { roundFilter } from './round-filter';
import { intlNumberFormatFilter } from './intl-number-format-filter';
import { kebabCaseFilter } from './kebab-case-filter';
import { snakeCaseFilter } from './snake-case-filter';
import { camelCaseFilter } from './camel-case-filter';
import { pascalCaseFilter } from './pascal-case-filter';

export const filtersCollection = {
  round: roundFilter,
  intlNumberFormat: intlNumberFormatFilter,
  kebabCase: kebabCaseFilter,
  snakeCase: snakeCaseFilter,
  camelCase: camelCaseFilter,
  pascalCase: pascalCaseFilter
};

export const filters = {
  install(Vue) {
    Object.entries(filtersCollection).forEach(
      ([filterName, filter]) => Vue.filter(filterName, filter)
    );
  }
};
