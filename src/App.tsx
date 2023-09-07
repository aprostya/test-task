import { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import './styles/app.scss';
import { FilterPanel } from './components/Filters/index';
import { CardsList } from './components/ProductCard/index';

function App() {
  return (
    <div className="wrapper">
      <section className="wrapper__descr">
        <h1>Product search</h1>
      </section>
      <FilterPanel />
      <CardsList />
    </div>
  );
}

export default App;
