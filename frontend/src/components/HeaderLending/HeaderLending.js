import './HeaderLending.css';
import logo from '../../images/logoPromoHeader.svg';
import { Route, Link, useHistory } from "react-router-dom";

function HeaderLending() {
    return(
        <header className='header-lending'>
          <img src={logo} className='header-lending__logo' alt='Logo'/>
          <div className='header-lending__links'>
            <p className='header-lending__link'>Регистрация</p>
            <button className='header-lending__button header-lending__link' >Войти</button>
          </div>
        </header>
    )
}

export default HeaderLending