import { SORT_ORDER } from '../../utils/enums';

export interface IFilter {
  groupCategory: string;
  filters: string[];
}

export type IFilters = {
  list: Array<IFilter>;
  searchValue: string;
  currentSort: SORT_ORDER;
};
