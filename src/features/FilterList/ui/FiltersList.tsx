import React, { useEffect } from 'react';
import './FilterList.scss';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../../app/appStore';
import { fetchFilterData } from '../../../entities/filter/model/slice';
import { Filter } from '../../../entities/filter/ui/Filter';

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
