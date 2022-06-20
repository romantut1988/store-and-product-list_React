export function Drawer({ onClose, onRemove, items = [] }) {
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
                                <button className="greenButton">оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                            </div>
                        </>
                        : <div className="cartEmpty">
                            <img className="cartEmptyImg" src="/img/empty-cart.jpg" alt="Empty" />
                            <h2>Корзина пустая</h2>
                            <p>Добавьте хотя бы одну пару крассовок, чтобы сделать заказ.</p>
                            <button onClick={onClose} className="greenButtonTop">
                                <img src="/img/arrow.svg" alt="Arrow" />Вернуться назад
                            </button>
                        </div>
                }
            </div>
        </div>
    );
}