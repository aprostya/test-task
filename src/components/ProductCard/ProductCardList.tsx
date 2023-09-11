import { ProductCard } from './ProductCard';
import './styles/cards.scss';

export const ProductCardList: React.FC = () => {
  return (
    <article className="card-list">
      <ProductCard />
    </article>
  );
};
