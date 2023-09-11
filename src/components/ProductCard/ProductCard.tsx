import React from 'react';

export const Card: React.FC = () => {
  return (
    <section className="cards-list">
      <article className="card-list-item">
        <a href="a" className="card-list-item__img">
          <img src="" alt="Beach" loading="lazy" />
        </a>
        <div className="card-list-item__text-block">
          <h3>Small Blouse title</h3>
          <p>Lorem ipsum dolor sit amet, consecteur adipiscing ellt.</p>
          <p>$20</p>
        </div>
      </article>
    </section>
  );
};
