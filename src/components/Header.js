import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export function Header(props) {
    const { totalPrice } = useCart();

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
                    <span>{totalPrice} руб.</span></li>
                <li>
                    <Link to="/favorites">
                        <img width={18} height={18} src="/img/heart.svg" alt="Bookmarks" />
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img width={18} height={18} src="/img/user.svg" alt="Bookmarks" />
                    </Link>
                </li>
            </ul>
        </header>
    )
} 