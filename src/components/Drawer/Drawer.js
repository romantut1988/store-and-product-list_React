import React, { useContext } from "react";
import axios from "axios";

import { useState } from "react";
import Info from "../Info";
import { useCart } from "../../hooks/useCart";

import styles from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function Drawer({ onClose, onRemove, items = [], opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://62ac2393bd0e5d29af1b6637.mockapi.io/orders', {
                items: cartItems,
            });
            await axios.put('https://62ac2393bd0e5d29af1b6637.mockapi.io/cart', []);
            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://62ac2393bd0e5d29af1b6637.mockapi.io/cart/' + item.id);
                await delay(1000);
            }

        } catch (error) {
            alert('Не удалось создать заказ : (');
        }
        setIsLoading(false);
    };

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
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
                                    <b>{totalPrice} руб. </b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{(totalPrice / 100) * 5} руб. </b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder}
                                className="greenButton">Оформить заказ
                                <img src="/img/arrow.svg" alt="Arrow" /></button>
                        </div>
                    </>
                    :
                    <Info
                        title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                        description={isOrderComplete
                            ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                            : "Добавьте хотя бы одну пару крассовок, чтобы сделать заказ."
                        }
                        image={isOrderComplete ? "/img/completed-order.jpg" : "/img/empty-cart.jpg"}
                    />

                }
            </div>
        </div>
    );
}