import React, { useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../redux/store/store';
import { fetchCardData } from '../../redux/products/slice';
import { nanoid } from 'nanoid';
import './styles/cards.scss';

export const ProductCardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cardList } = useSelector((state: RootState) => state.cards);
  const { searchValue } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    dispatch(fetchCardData({ searchValue }));
  }, [dispatch, searchValue]);

  return (
    <article className="card-list">
      {cardList?.map(({ title, description, price, image }) => (
        <ProductCard
          key={nanoid()}
          title={title}
          description={description}
          image={image}
          price={price}
        />
      ))}
    </article>
  );
};
