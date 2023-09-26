import { useParams } from 'react-router-dom';

export const ProductCardDetail: React.FC = () => {
  const { title } = useParams();
  return (
    <section className="cards-list">
      <h3>{title}</h3>
    </section>
  );
};
