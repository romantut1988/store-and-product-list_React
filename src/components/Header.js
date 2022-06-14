export function Header() {
    return (
        <header>
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.png" />
                <div className="headerInfo">
                    <h3>React sneakers</h3>
                    <p>Магазин лучших крассовок</p>
                </div>
            </div>
            <ul className="headerRight">
                <li>
                    <img width={18} height={18} src="/img/cart.svg" />
                    <span>1205 руб.</span></li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" />
                </li>
            </ul>
        </header>
    )
} 