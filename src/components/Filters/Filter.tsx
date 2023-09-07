import { getWordInRegularCase } from '../../utils/utils';

interface IFilterItem {
  name: string;
  filters: string[] | null;
}

export const Filter = (props: IFilterItem) => {
  const { name, filters } = props;

  return (
    <section className="filter-container">
      <h2 className="filter-container__title">{getWordInRegularCase(name)}</h2>
      <ul className="filters-list">
        {filters?.map((filter) => (
          <li className="filters-list__item" key={filter}>
            <button className="pure-button pure-button-secondary filter-button">
              {getWordInRegularCase(filter)}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
