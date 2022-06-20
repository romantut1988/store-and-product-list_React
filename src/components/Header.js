import { Link } from "react-router-dom";

export function Header(props) {
    return (
        <header>
            <Link to="/">
            <div className="headerLeft">
                <img width={40} height={40} src="/img/logo.png" alt="Logotype" />
                <div className="headerInfo">
                    <h3>React sneakers</h3>
                    <p>Магазин лучших крассовок</p>
                </div>
            </div>
            </Link> 
            <ul className="headerRight">
                <li onClick={props.onClickCatr}>
                    <img width={18} height={18} src="/img/cart.svg" alt="Basket" />
                    <span>1205 руб.</span></li>
                <li>
                    <Link to="/favorites">
                        <img width={18} height={18} src="/img/heart.svg" alt="Bookmarks" />
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt="User" />
                </li>
            </ul>
        </header>
    )
} 