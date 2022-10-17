import './Form.css';
import '../Register/Register.css'
import logo from '../../images/logoPromoHeader.svg';

function Form({title, buttonName, question, linkName, children}) {
    return (
        <form className='form'>
            <img src={logo} className='form__logo' alt='logoForm'/>
            <h2 className='form__title'>{title}</h2>
            {children}
            <p className='form__input-name'>E-mail</p>
            <input  className='form__input form__input_email' type="email" minLength="2" required></input>
            <p className='form__input-name'>Пароль</p>
            <input className='form__input form__input_password' minLength="2" maxLength="30" required></input>
            <button type="submit" className={children ? 'form__button register__button' : 'form__button'}>{buttonName}</button>
            <p className="form__question">{question}<a href="a" className='form__link'>{linkName}</a></p>
        </form>
    )
}

export default Form

