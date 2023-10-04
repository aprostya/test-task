import React, { useEffect, useMemo } from 'react';
import './styles/cards.scss';
import { ProductCard } from './ProductCard/ProductCard';
import { SkeletonMock } from '../ui/ContentLoader';
import { STATUSES } from '../../types/type';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../redux/store/store';
import { fetchCardData } from '../../redux/products/slice';
import { nanoid } from 'nanoid';
import { SORT_ORDER } from '../../utils/enums';
import { EmptyResult } from './EmptyResult';

export const ProductCardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cardList, status } = useSelector((state: RootState) => state.cards);
  const { searchValue, currentSort, selectedFilters } = useSelector(
    (state: RootState) => state.filters,
  );

  const sortedCardList = useMemo(() => {
    return [...cardList].sort((a, b) => {
      if (currentSort === SORT_ORDER.ASC) {
        return a.price - b.price;
      }
      if (currentSort === SORT_ORDER.DESC) {
        return b.price - a.price;
      }
      return 0;
    });
  }, [cardList, currentSort]);

  const cardListLength = sortedCardList.length;

  const getCardListComponent = () => {
    switch (status) {
    case STATUSES.ERROR:
      return <div>Content loading error, please try again later</div>;
    case STATUSES.SUCCESS:
      if (cardListLength === 0) {
        return <EmptyResult />;
      } else {
        return sortedCardList?.map(({ title, description, price, image }) => (
          <ProductCard
            key={nanoid()}
            title={title}
            description={description}
            image={image}
            price={price}
          />
        ));
      }

    default:
      return <SkeletonMock />;
    }
  };

  useEffect(() => {
    dispatch(fetchCardData({ searchValue, selectedFilters }));
  }, [dispatch, searchValue, selectedFilters]);

  return <article className="card-list">{getCardListComponent()}</article>;
};
