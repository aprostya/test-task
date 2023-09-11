import { Card } from './ProductCard';
import './styles/cards.scss';

export const CardsList: React.FC = () => {
  return (
    <article className="card-list">
      <Card />
    </article>
  );
};
