import { IProductItem } from '../../model/types';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

export const ProductCard = ({
  title,
  description,
  price,
  image,
}: IProductItem) => {
  return (
    <Link key={title} to={`/product/${title}`} className="card-list-wrapper">
      <section className="cards-list">
        <article className="card-list-item">
          <div className="card-list-item__img-container">
            <img src={image?.src} alt={image?.alt} />
          </div>
          <div className="card-list-item-text">
            <h3>{title}</h3>
            <p className="card-list-item-text__descr">{description}</p>
            <p>${price}</p>
          </div>
        </article>
      </section>
    </Link>
  );
};
