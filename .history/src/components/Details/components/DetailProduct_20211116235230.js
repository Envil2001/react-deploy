
import { useState, useContext } from 'react';
import './DetailProduct.css';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../ShopContent/context';

const DetailProduct = ({id, image, title, testimonials, available, cost, onAdd, discount, procentdiscount }) => {
    const [isShownProduct, setIsShownProduct] = useState(0);
    const navigate = useNavigate();
    let itemsToRender;

    if(image) {
        itemsToRender = image.map((item, index) => (
            <div key={index} className="slider-nav__item" tabIndex="0"><img src={item} alt={title} onMouseEnter={() => setIsShownProduct(index)}></img></div>
        ))
    }

    const { isItemAdded } = useContext(AppContext);
    const obj = { id, parentId: id, title, image, testimonials, available, cost };

    const onClickPlus = () => {
        onAdd(obj);
    };

    const card = props && props.image && props.image.length > 0 ?
    props.image.map((card, i) => {
        return (          
            <div className="card" style={{marginTop: "25px"}}>
            <button className="back" onClick={() => navigate(-1)}>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipPath="evenodd" d="M0.192 5.4491L4.864 9.82036C5.136 10.0599 5.552 10.0599 5.808 9.82036C6.064 9.58084 6.064 9.19162 5.808 8.93713L1.6 5L5.808 1.06287C6.064 0.823354 6.064 0.419162 5.808 0.179641C5.552 -0.0598803 5.136 -0.0598804 4.864 0.179641L0.192 4.56587C-0.0639997 4.80539 -0.0639998 5.19461 0.192 5.4491Z" fill="#484B55"/>
                </svg>
            Back</button>
            <div className="card-content">
                <div className="card-slider">
                    <div className="card-slider__nav slider-nav">
                    {
                        itemsToRender
                    }
                    </div>
                    <div className="card-slider__block slider-block">
                        <div className="swiper-slide">
                        {image && <img src={image[isShownProduct]} alt={title}></img>}
                        </div>
                    </div>
                </div>
                <div className="card-info">
                    <span className="vendor">Артикул: 879876</span>
                    <h1 className="title">{title}</h1>
                    <div className="testimonials">
                        <div className="rating">
                        <span className="Card_product__rating__3UhWQ" style={{marginRight: "0px"}}><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"></path></svg></span>
                        <span className="Card_product__rating__3UhWQ" style={{marginRight: "0px"}}><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"></path></svg></span>
                        <span className="Card_product__rating__3UhWQ" style={{marginRight: "0px"}}><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"></path></svg></span>
                        <span className="Card_product__rating__3UhWQ" style={{marginRight: "0px"}}><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"></path></svg></span>
                        <span className="Card_product__rating__3UhWQ" style={{marginRight: "0px"}}><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.04894 0.92705C7.3483 0.00573924 8.6517 0.00573965 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58779 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"></path></svg></span>
                        </div>
                        <p className="testimonials__link">Отзывы {testimonials}</p>
                    </div>
                    <span className="available">В началии: {available} шт</span>
                    <div className="price">
                        {
                            discount ?  
                            <>
                                <span className="price__current">{Math.floor((cost / 100) * (100 - procentdiscount))} ₽</span>
                                <span className="price__old">{cost} ₽</span>
                                <span className="price__procentdiscount">Скидка: {procentdiscount}% </span>
                            </>
                            :
                            <span className="price__current">{cost} ₽</span>
                        }

                    </div>
                    <button className={isItemAdded(id) ? "btn active" : "btn"} onClick={onClickPlus}>{isItemAdded(id) ? "В корзине" : "Добавить в корзину"}</button>
                </div>
            </div>
            </div>
        )
    }) : 
    <div className="centerFixed">
        <div className="contentFix">
            <div className="pswp__preloader__icn">
                <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                </div>
            </div>
        </div>
    </div>;
}

export default DetailProduct;