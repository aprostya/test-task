import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../redux/store/store';
import { fetchFilterData } from '../../redux/filters/slice';
import { Filter } from './Filter';
import './styles/filters.scss';

export const FiltersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    dispatch(fetchFilterData());
  }, [dispatch]);

  return (
    <section className="filters-list">
      {list?.map((item) => (
        <Filter
          key={item.groupCategory}
          filters={item.filters}
          name={item.groupCategory}
        />
      ))}
    </section>
  );
};

