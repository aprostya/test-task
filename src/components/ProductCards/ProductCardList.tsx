import React, { useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCardData } from '../../redux/products/slice';
import { nanoid } from 'nanoid';
import { RootState } from '../../redux/store/store';
import { AppDispatch } from '../../types/type';
import './styles/cards.scss';

export const ProductCardList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cardList } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    dispatch(fetchCardData());
  }, [dispatch]);

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
