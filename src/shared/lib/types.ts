import { SORT_ORDER, FilterType } from './enums';

export interface IFilter {
  groupCategory: FilterType;
  filters: string[];
}

export type IFilters = {
  list: Array<IFilter>;
  searchValue: string;
  currentSort: SORT_ORDER;
  selectedFilters: Array<IFilter>;
};

export type IProductQueryParams = Omit<IFilters, 'list' | 'currentSort'>;
