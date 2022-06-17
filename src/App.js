import React, { useState } from 'react';
import { Card } from './components/Card/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: 'img/sneakers/1.jpg' },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: 'img/sneakers/2.jpg' },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: 'img/sneakers/3.jpg' },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: 'img/sneakers/4.jpg' },
]

function App() {
const [cartOpened, setCartOpened] = useState(false);

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={ () => {setCartOpened(false)}} />}
      <Header onClickCatr={ () => setCartOpened(true)} />
      <div className="content">
        <div className="contentInput">
          <h1>Все крассовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input className="inputSearch" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {arr.map((obj) => (
            <Card title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavotite={() => console.log('Добавили в закладки')}
              onPlus={() => console.log('Нажали плюс')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
