import React from 'react';
import './styles/sort.scss';

export const Sort: React.FC = () => {
  return (
    <div className="sort-filter">
      <label className="sort-filter__label" htmlFor="sort-select">
        Sort by
      </label>
      <select className="sort-component" name="sort-component" id="sort-select">
        <option value="asc">Price ascending</option>
        <option value="desc">Price descending</option>
      </select>
    </div>
  );
};
