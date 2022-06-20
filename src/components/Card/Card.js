import React, { useState } from 'react';
import styles from './Card.module.scss';

export function Card({ title, imageUrl, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price }); 
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({ title, imageUrl, price }); 
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/img/liked.svg" : "/img/unlicked.svg"} alt="Unliked" />
            </div> 
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className={styles.cardDescription}>
                <div className={styles.cardPrice}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                    alt="Plus"
                     />
            </div>
        </div>
    );
}

