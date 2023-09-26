import { SORT_ORDER } from '../../utils/enums';
import { FilterType } from '../../components/Filters';

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
