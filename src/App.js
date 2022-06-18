import React, { useEffect, useState } from 'react';
import { Card } from './components/Card/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://62ac2393bd0e5d29af1b6637.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => { setCartOpened(false) }} />}
      <Header onClickCatr={() => setCartOpened(true)} />
      <div className="content">
        <div className="contentInput">
          <h1>Все крассовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input className="inputSearch" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {items.map((item) => (
            <Card title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavotite={() => console.log('Добавили в закладки')}
              onPlus={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
