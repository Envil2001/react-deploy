
import { useState, useContext } from 'react';
import styles from './Card.module.css';
import { Link } from "react-router-dom";
import AppContext  from '../context'

const Card = ({id, image, title, testimonials, available, cost, onAdd, discount, procentdiscount }) => {
    const [isShown, setIsShown] = useState(0);

    const { isItemAdded } = useContext(AppContext);
    const obj = { id, parentId: id, title, image, testimonials, available, cost };

    const onClickPlus = () => {
        onAdd(obj);
    };

    return (
        <article className={styles.product}>
            <div className={styles.product__image}>
                <Link to={`/products/${id}`} className={styles.image_switch}>
                {
                    image.map((image, index) => {
                        return (
                        <div className={styles.image_switch__item} key={index} onMouseEnter={() => setIsShown(index)}>
                            <div  className={styles.image_switch__img}><img src={image} alt={title}></img></div>
                        </div>
                        )
                    })
                }
                </Link>
                <ul className={styles.image_pagination} aria-hidden="true">
                    {
                        image.map((image, index) => 
                            <li key={index} className={index === isShown ? `${styles.image_pagination__item} ${styles.__active}` : styles.image_pagination__item}></li> 
                        )
                    }
                </ul>
            </div>
            <h3 className={styles.product__title}>
                <Link to={`/products/${id}`}>{title}</Link>
            </h3>
            <div className={styles.product__props}>
                <span className={styles.product__rating}>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                        />
                    </svg>
                    4,5
                </span>
                <span className={styles.product__testimonials}>{testimonials} отзыва</span>
            </div>
            <div className={styles.product__info}>
                <span className={styles.product__term}>Артикул: 879876</span>
                <span className={styles.product__available}>В наличии: {available} шт</span>
            </div>
            <div className={styles.product_price}>
                {discount ?  
                <>
                <span className={styles.product_price__current}>{Math.floor((cost / 100) * (100 - procentdiscount))} ₽</span> 
                <span className={styles.product_price__old}>{cost} ₽  </span>
                <span className={styles.product_price__procentdiscount}>Скидка: {procentdiscount}% </span>
                </>
                : 
                <>
                <span className={styles.product_price__current}>{cost} ₽</span> 
                </>
                }

            </div>
            <button className={isItemAdded(id) ? "btn active" : "btn"} onClick={onClickPlus}>{isItemAdded(id) ? "В корзине" : "Добавить в корзину"}</button>
        </article>
    )
}


export default Card;