import React from 'react';

export const Card: React.FC = () => {
  return (
    <section className="cards-list">
      <article className="card-list-item">
        <a href="a" className="card-list-item__img">
          <img
            src="https://24.media.tumblr.com/d6b9403c704c3e5aa1725c106e8a9430/tumblr_mvyxd9PUpZ1st5lhmo1_1280.jpg"
            alt="Beach"
            loading="lazy"
          />
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
