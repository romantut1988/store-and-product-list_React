import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from './components/Card/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
      axios.get('https://62ac2393bd0e5d29af1b6637.mockapi.io/items').then(res => {
        setItems(res.data);
      });
      axios.get('https://62ac2393bd0e5d29af1b6637.mockapi.io/cart').then(res => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://62ac2393bd0e5d29af1b6637.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    // axios.delete(`https://62ac2393bd0e5d29af1b6637.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => { setCartOpened(false) }} onRemove = {onRemoveItem} />}
      <Header onClickCatr={() => setCartOpened(true)} />
      <div className="content">
        <div className="contentInput">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={ () => setSearchValue('')} className="removeBtn" src="/img/btn-remove.svg" alt="Clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} className="inputSearch" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
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
