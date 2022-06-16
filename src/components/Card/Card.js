import React, { useState } from 'react';
import styles from './Card.module.scss';

export function Card(props) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavotite}>
                <img src="/img/hearn-unlicked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className={styles.cardDescription}>
                <div className={styles.cardPrice}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

