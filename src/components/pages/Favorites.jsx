import Card from "../Card/Card";
import React from 'react';

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="contentInput">
        <h1>Мои закладки</h1>
      </div>

      <div className="sneakers">
      {items.map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
