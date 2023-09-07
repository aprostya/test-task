import { Card } from './Card';
import './styles/cards.scss';

export const CardsList: React.FC = () => {
  return (
    <article className="card-list">
      <Card />
    </article>
  );
};
