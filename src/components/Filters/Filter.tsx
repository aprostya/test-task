import { getWordInRegularCase } from '../../utils/utils';
import { nanoid } from 'nanoid';
import { RootState, useAppDispatch } from '../../redux/store/store';
import { changeSelectedFilter } from '../../redux/filters/slice';
import { FilterType } from './index';
import { useSelector } from 'react-redux';

interface IFilterItem {
  name: FilterType;
  filters: string[] | null;
}

export const Filter: React.FC<IFilterItem> = (props) => {
  const { name, filters } = props;
  const dispatch = useAppDispatch();
  const { selectedFilters } = useSelector((state: RootState) => state.filters);
  const getBtnClassname = (name: FilterType, filter: string) => {
    const btnClass = 'pure-button pure-button-secondary filter-button';
    const filterActiveClass = 'filter-button--active';
    const isActive = selectedFilters.some(
      (item) => item.groupCategory === name && item.filters.includes(filter),
    );
    if (isActive) {
      if (name === FilterType.COLOR) {
        return `${btnClass} filter-button--${filter}`;
      }
      return `${btnClass} ${filterActiveClass}`;
    } else {
      return btnClass;
    }
  };

  return (
    <section className="filter-container">
      <h2 className="filter-container__title">{getWordInRegularCase(name)}</h2>
      <ul className="filters-list">
        {filters?.map((filter) => (
          <li className="filters-list__item" key={nanoid()}>
            <button
              className={getBtnClassname(name, filter)}
              onClick={() => dispatch(changeSelectedFilter({ name, filter }))}
            >
              {getWordInRegularCase(filter)}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
