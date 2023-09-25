import { IFilters } from '../redux/filters/types';

export enum STATUSES {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type IProductQueryParams = Omit<IFilters, 'list' | 'currentSort'>;
