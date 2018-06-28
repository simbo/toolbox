import { roundFilter } from './round';
import { intlNumberFormatFilter } from './intl-number-format';

export const filtersCollection = {
  round: roundFilter,
  intlNumberFormat: intlNumberFormatFilter
};

export const filters = {
  install(Vue) {
    Object.entries(filtersCollection).forEach(
      ([filterName, filter]) => Vue.filter(filterName, filter)
    );
  }
};
