import React, { useContext } from 'react';
import Card from "../Card/Card";
import AppContext from "../../context";

function Favorites() {
  const {favorites, onAddToFavorite} = useContext(AppContext);

  return (
    <div className="content">
      <div className="contentInput">
        <h1>Мои закладки</h1>
      </div>

      <div className="sneakers">
      {favorites.map((item, index) => (
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
