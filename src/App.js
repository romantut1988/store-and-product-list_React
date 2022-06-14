import React from 'react';
import { Card } from './components/Card';
import { Header } from './components/Header';
import {Drawer} from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="contentInput">
          <h1>Все крассовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input className="inputSearch" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
