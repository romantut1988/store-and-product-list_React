import styles from './Card.module.scss';

export function Card(props) {
    console.log(props)
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/hearn-unlicked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className={styles.cardDescription}>
                <div className={styles.cardPrice}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className={styles.button} onClick={props.onClick}>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}

