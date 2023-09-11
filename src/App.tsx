import './styles/app.scss';
import { FilterPanel } from './components/Filters/index';
import { ProductCardList } from './components/ProductCard/index';

function App() {
  return (
    <div className="wrapper">
      <section className="wrapper__descr">
        <h1>Product search</h1>
      </section>
      <FilterPanel />
      <ProductCardList />
    </div>
  );
}

export default App;
