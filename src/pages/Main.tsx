import { FiltersList } from '../components/Filters';
import { ProductCardList } from '../components/ProductCards/index';
import { ResultsInfo } from '../components/ResultsInfo/index';
import { Sort } from '../components/Sort/index';
import { ProductSearch } from '../components/ProductSearch';

export const Main: React.FC = () => {
  return (
    <>
      <ProductSearch />
      <FiltersList />
      <div className="sort-container">
        <div className="sort-wrapper">
          <ResultsInfo />
          <Sort />
        </div>
      </div>
      <ProductCardList />
    </>
  );
};
