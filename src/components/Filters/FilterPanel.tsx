import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/type';
import { fetchFilterData } from './slices/filterSlice';
import { Filter } from './Filter';
import { RootState } from '../../store/store';
import './styles/filters.scss';

export const FilterPanel: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    dispatch(fetchFilterData());
  }, [dispatch]);

  return (
    <section className="filters-list">
      {list?.map((item) => (
        <Filter filters={item.filters} name={item.groupCategory} />
      ))}
    </section>
  );
};
