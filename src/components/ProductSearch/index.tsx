import { SearchBar } from '../ui/SearchBar';
import './styles/search.scss';

export const ProductSearch = () => {
  return (
    <section className="product-search-container">
      <h1 className="product-search-container__title">Product search</h1>
      <SearchBar />
    </section>
  );
};
