import { useState } from 'react';
import { Link } from 'react-router-dom';



const Form = ({title, handleClick, link, backLink}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [showPass, setShowPass] = useState(false);

    return (
        <div className="centerFixed">
            <div className="form__container">
                <div className="form__title"><h3>{title}</h3></div>
                <div className="form__content">
                    <div className="form__row">
                        <label className="form__label" htmlFor="auth_email"> Эл. почта или телефон </label>
                        <input id="auth_email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form__input"></input>
                    </div>

                    <div className="form__row">
                        <label className="form__label" htmlFor="auth_pass"> Пароль </label>
                        <div className="form__input__container">
                            <input id="auth_pass" type={showPass ? "password" : "text"} value={pass} onChange={(e) => setPass(e.target.value)} className="form__input"></input>
                            <div className="password-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" style={showPass ? {display: "none"} : {display: "block"}} onClick={() => setShowPass(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" style={showPass ? {display: "block"} : {display: "none"}} onClick={() => setShowPass(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-content">
                    <button className="btn" onClick={() => handleClick(email, pass)}>{title}</button>
                </div>
               
                <div className="additional-content">
                    <Link className="additional-text" to={{pathname: link}}>{backLink}</Link>
                </div>
            </div>
        </div>
    );
}

export default Form;