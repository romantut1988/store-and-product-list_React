import Card from "../Card/Card";
import React from 'react';

function Home({
    items,
    cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
  }) {
  return (
    <div className="content">
      <div className="contentInput">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            className="inputSearch"
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="sneakers">
        {items
          .filter((item) =>item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              added={cartItems.find((obj) => Number(obj.id) === Number(item.id))}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
