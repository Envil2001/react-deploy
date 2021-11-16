import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './components/Modal/Modal';
import './Header.css';
import { useDispatch } from "react-redux";

import useAuth from "../../hooks/use-auth"
import { removeUser } from "../../store/slices/userSlices";

const Header = ({items, onRemove, onSearch}) => {
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();

	const [theme, setTheme] = useState('light');
	const [openModal, setOpenModal] = useState(false);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		localStorage.setItem('themestring', JSON.stringify(theme))
	}
	
	useEffect(() => {
		document.body.setAttribute('data-theme', JSON.parse(localStorage.getItem('themestring')) ||  theme);
	}, [theme])


    return (
	<>
		<header className="header">
			<div className="container">
				<div className="app-header-left">
					<Link to="/" className="app-name">Portfolio</Link>
					<div className="search-wrapper">
						<input onChange={(event) => onSearch(event.target.value)} className="search-input" type="text" placeholder="Search"></input>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
						<defs></defs>
						<circle cx="11" cy="11" r="8"></circle>
						<path d="M21 21l-4.35-4.35"></path>
						</svg>
					</div>
				</div>
				<div className="app-header-right">
					<div>
					<button className="btn-header-1" onClick={toggleTheme}>
					{
							JSON.parse(localStorage.getItem('themestring')) === 'light' ?
							<svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
							</svg> 
							: 
							<svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
							</svg>
					}
					</button>
					</div>

					<div>
						<button className={items.length > 0 ? "bagage btn-header-1 active" : "bagage btn-header-1"}>
							<img className="svg" src="https://img.icons8.com/color/48/000000/shopping-basket.png" alt="Корзина"/>
							<div className="cart-content">


							{items.length > 0 ? 
								<>						
								<ul className="cart-content__list" data-simplebar>
									{
										items.map((obj, index) => (
											<li className="cart-content__item" key={index}>
												<article className="cart-content__product cart-product">
													<img src={obj.image[0]} alt="Товар" className="cart-product__img"></img>
													<div className="cart-product__text">
														<h3 className="cart-product__title">{obj.title}</h3>
														<span className="cart-product__price">{obj.cost} ₽</span>
													</div>
													<button className="cart-product__delete" aria-label="Удалить товар" onClick={() => onRemove(obj.id)}>
														<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M18.5715 2.85715H13.5715V2.14285C13.5715 0.959387 12.6121 0 11.4287 0H8.57152C7.38805 0 6.42867 0.959387 6.42867 2.14285V2.85715H1.42865C1.03415 2.85715 0.714355 3.17695 0.714355 3.57145C0.714355 3.96595 1.03419 4.28571 1.42865 4.28571H2.20506L3.57151 19.3507C3.6052 19.7196 3.91537 20.0015 4.28581 20H15.7144C16.0848 20.0015 16.395 19.7196 16.4287 19.3507L17.7951 4.28571H18.5715C18.966 4.28571 19.2858 3.96591 19.2858 3.57141C19.2858 3.17691 18.966 2.85715 18.5715 2.85715ZM7.85722 2.14285C7.85722 1.74835 8.17702 1.42856 8.57152 1.42856H11.4287C11.8232 1.42856 12.143 1.74835 12.143 2.14285V2.85715H7.85726V2.14285H7.85722ZM15.0622 18.5714H4.93796L3.64295 4.28571H7.14296H16.3608L15.0622 18.5714Z" fill="#4D4D4D" fillOpacity="0.3"/>
															<path d="M7.8573 16.381C7.85722 16.38 7.85717 16.379 7.85709 16.378L7.14279 6.37805C7.11479 5.98355 6.77227 5.68647 6.3778 5.71447C5.9833 5.74247 5.68623 6.085 5.71423 6.47946L6.42853 16.4794C6.45519 16.854 6.76733 17.144 7.14283 17.143H7.19427C7.58781 17.1157 7.88467 16.7745 7.8573 16.381Z" fill="#4D4D4D" fillOpacity="0.3"/>
															<path d="M9.99994 5.71436C9.60544 5.71436 9.28564 6.03415 9.28564 6.42865V16.4286C9.28564 16.8231 9.60544 17.1429 9.99994 17.1429C10.3944 17.1429 10.7142 16.8231 10.7142 16.4286V6.42865C10.7142 6.03415 10.3944 5.71436 9.99994 5.71436Z" fill="#4D4D4D" fillOpacity="0.3"/>
															<path d="M13.6219 5.71423C13.2274 5.68623 12.8849 5.9833 12.8569 6.3778L12.1426 16.3778C12.1137 16.7712 12.4091 17.1136 12.8026 17.1425C12.8038 17.1426 12.8049 17.1427 12.8062 17.1428H12.8569C13.2324 17.1437 13.5445 16.8537 13.5712 16.4792L14.2855 6.47921C14.3135 6.08475 14.0164 5.74227 13.6219 5.71423Z" fill="#4D4D4D" fillOpacity="0.3"/>
														</svg>
													</button>
												</article>
											</li>
										))
									}
								</ul>
								<div className="cart-content__bottom">
									<div className="cart-content__fullprice">
										<span>Итого:</span>
										<span className="fullprice">568 789 ₽</span>
									</div>
									<div className="cart-content__btn btn" onClick={() => setOpenModal(true)}>Перейти в корзину</div>
								</div>
								</>
								:
								<div className="noproduct">
									<img src="https://img.icons8.com/color/48/000000/shopping-basket.png" alt="Корзина"/>
									<h3>Корзина пустая</h3>
									<p>Добавьте хотя бы один товар, чтобы сделать заказ.</p>
								</div>
							}
							</div>
						</button>
					</div>
					{isAuth ?
						<button className="btn" onClick={() => dispatch(removeUser())}>{email} Выйти</button>
					: <Link to="/login" className="btn-header-2 btn">Войти</Link>
					}
					
				</div>
			</div>
		</header>
		<Modal openModal={openModal} items={items} onRemove={onRemove} onClose={() => setOpenModal(false)}/>	
	</>
    )
}

export default Header;