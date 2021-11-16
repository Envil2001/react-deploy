import { useState } from 'react/cjs/react.development';
import './Modal.css';




const Modal = ({openModal, items, onRemove, onClose}) => {

    const [showSostav, setShowSostav] = useState(false);


    
    const toggleSostav = () => {
        setShowSostav(!showSostav)
    }

    return (
        <div className={openModal ? "modal is-open" : "modal"}>
            <div className={openModal ? "modal__container order-modal modal-open" : "modal__container order-modal"}>
                <div className="closeModal" onClick={onClose}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.77193 0.228069C10.076 0.532161 10.076 1.02519 9.77193 1.32928L6.10128 4.99994L9.77205 8.67072C10.0761 8.97481 10.0761 9.46784 9.77205 9.77193C9.46796 10.076 8.97493 10.076 8.67084 9.77193L5.00006 6.10115L1.32928 9.77193C1.02519 10.076 0.532161 10.076 0.228069 9.77193C-0.0760227 9.46784 -0.0760234 8.97481 0.228069 8.67072L3.89885 4.99994L0.228192 1.32928C-0.0759003 1.02519 -0.0758996 0.532161 0.228193 0.228069C0.532285 -0.076023 1.02532 -0.076023 1.32941 0.228069L5.00006 3.89872L8.67072 0.228069C8.97481 -0.076023 9.46784 -0.076023 9.77193 0.228069Z" fill="#808080"/>
                    </svg>
                </div>
                <div className="modal-content order-modal__content">
                    <div className="order-modal__top">
                        <h2 className="order-modal__title">Оформление заказа</h2>
                        <span className="order-modal__number">Заказ № 3456 67</span>
                    </div>
                    <div className="order-modal__info">
                        <div className="order-modal__quantity order-modal__info-item">Товаров в заказе: <span>{items.length} шт</span></div>
                        <div className="order-modal__summ order-modal__info-item">Общая сумма заказа: <span>0 ₽</span></div>
                        <div className="order-modal__products order-modal__info-item">
                            <button className="order-modal__btn" onClick={() => toggleSostav()}>Состав заказа
                                <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.92012 0.810028C6.81343 0.703128 6.64032 0.702963 6.53341 0.809631L3.69335 3.6438C3.58672 3.75041 3.41327 3.7504 3.30645 3.64359L0.466594 0.809631C0.359693 0.70295 0.18658 0.703128 0.0798849 0.810028C-0.0267831 0.916928 -0.0266053 1.09006 0.0802814 1.19672L2.91994 4.03049C3.07992 4.19044 3.28999 4.27039 3.50008 4.27039C3.71005 4.27039 3.92007 4.19047 4.07984 4.03068L6.91972 1.19672C7.02661 1.09006 7.02678 0.916928 6.92012 0.810028Z" fill="#808080"/>
                                </svg>
                            </button>
                            <ul className={showSostav ? "order-modal__list" : "order-modal__list active"}>
                            {
								items.map((obj, index) => (
                                    <li className="order-modal__item" key={index}>
                                        <article className="order-modal__product order-product">
                                            <img src={obj.image[0]} alt={obj.title} className="order-product__img"></img>
                                            <div className="order-product__text">
                                                <h3 className="order-product__title">{obj.title}</h3>
                                                <span className="order-product__price">{obj.cost} ₽ </span>
                                            </div>
                                            <button className="order-product__delete" onClick={() => onRemove(obj.id)}>Удалить</button>
                                        </article>
                                    </li> 
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                    
                    <form className="order-modal__form order">
                        <input type="hidden" name="theme" value="Обратный звонок"></input>
                        <input type="hidden" name="admin_email[]" value="maxgraph23@gmail.com"></input>
                        <input type="hidden" name="form_subject" value="Заявка с сайта Сайт"></input>
                        <label className="order__label">
                            <span className="order__text">Ваше имя</span>
                            <input type="text" name="Имя" className="order__input"></input>
                        </label>
                        <label className="order__label">
                            <span className="order__text">Номер телефона</span>
                            <input type="tel" name="Телефон" className="order__input" placeholder="+7 (___)___-__-__"></input>
                        </label>
                        <label className="order__label">
                            <span className="order__text">Ваше имя</span>
                            <input type="email" name="Email" className="order__input" placeholder="post@gmail.com"></input>
                        </label>
                        <button className="order__btn btn">Оформить заказ</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;