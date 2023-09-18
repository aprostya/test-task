import { getWordInRegularCase } from '../../utils/utils';
import { nanoid } from 'nanoid';
import { FilterType } from './index';

interface IFilterItem {
  name: FilterType;
  filters: string[] | null;
}

export const Filter: React.FC<IFilterItem> = (props) => {
  const { name, filters } = props;
  const getBtnClassname = (name: FilterType, filter: string) => {
    const btnClass = 'pure-button pure-button-secondary filter-button';
    if (name === FilterType.COLOR) {
      return `${btnClass} filter-button--${filter}`;
    }
    return btnClass;
  };

  return (
    <section className="filter-container">
      <h2 className="filter-container__title">{getWordInRegularCase(name)}</h2>
      <ul className="filters-list">
        {filters?.map((filter) => (
          <li className="filters-list__item" key={nanoid()}>
            <button className={getBtnClassname(name, filter)}>
              {getWordInRegularCase(filter)}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
