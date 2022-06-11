function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <svg />
          <div className="headerInfo">
            <h3>React sneakers</h3>
            <p>Магазин лучших крассовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg />
            <span>1205 руб.</span></li>
          <li>
            <svg />
          </li>
        </ul>
      </header>
      <div className="content">
          <h1>Все красовки</h1>
          ..........
      </div>
    </div>
  );
}

export default App;
