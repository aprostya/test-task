import React, { useState } from 'react';
import { SORT_ORDER } from '../../utils/enums';
import { changeSort } from '../../redux/filters/slice';
import { useAppDispatch } from '../../redux/store/store';
import './styles/sort.scss';

export const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedOption, setOption] = useState(SORT_ORDER.DEFAULT);

  const handleChange = (value: SORT_ORDER) => {
    setOption(value);
    dispatch(changeSort(value));
  };

  return (
    <div className="sort-filter">
      <label className="sort-filter__label" htmlFor="sort-select">
        Sort by
      </label>
      <select
        className="sort-component"
        name="sort-component"
        id="sort-select"
        value={selectedOption}
        onChange={(event) => {
          handleChange(event.target.value as SORT_ORDER);
        }}
      >
        <option key={SORT_ORDER.DEFAULT} value={SORT_ORDER.DEFAULT}>
          By popularity
        </option>
        <option key={SORT_ORDER.ASC} value={SORT_ORDER.ASC}>
          Price ascending
        </option>
        <option key={SORT_ORDER.DESC} value={SORT_ORDER.DESC}>
          Price descending
        </option>
      </select>
    </div>
  );
};
