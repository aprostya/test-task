export enum API_ROUTES {
  ALL = '/api/v1/',
  LABELS = '/api/v1/labels',
  FILTERS = '/api/v1/filters',
  CARDS = '/api/v1/results',
}

export enum SORT_ORDER {
  ASC = 'asc',
  DESC = 'desc',
  DEFAULT = 'default',
}

export enum STATUSES {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export enum FilterType {
  TYPE = 'type',
  COLOR = 'color',
  SIZE = 'size',
}
