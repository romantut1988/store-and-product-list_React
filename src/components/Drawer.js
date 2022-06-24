import React, { useContext } from "react";
import { useState } from "react";
import Info from "./info";
import AppContext from "../context";

export function Drawer({ onClose, onRemove, items = [] }) {
    const {setCartItems} = useContext(AppContext);
    const [isOrderCompleted, setIsOrderComplete] = useState(false);

    const onClickOrder = () => {
        setIsOrderComplete(true);
        setCartItems([]);
    };

    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина<img onClick={onClose} className="closeBtn" src="/img/btn-remove.svg" alt="Close" /></h2>
                {items.length > 0 ?
                    <>
                        <div className="items">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem">
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                        className="cartItemImg">
                                    </div>
                                    <div className="cartPrice">
                                        <p>{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)}
                                        className="removeBtn"
                                        src="/img/btn-remove.svg"
                                        alt="Remover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 498 руб. </b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1074 руб. </b>
                                </li>
                            </ul>
                            <button onClick={onClickOrder}
                                className="greenButton">оформить заказ
                                <img src="/img/arrow.svg" alt="Arrow" /></button>
                        </div>
                    </>
                    :
                    <Info
                        title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
                        description={isOrderCompleted ? "Ваш заказ #18 скоро будет передан курьерской доставке" : "Добавьте хотя бы одну пару крассовок, чтобы сделать заказ."}
                        image={isOrderCompleted ? "/img/completed-order.jpg" : "/img/empty-cart.jpg"}
                    />

                }
            </div>
        </div>
    );
}