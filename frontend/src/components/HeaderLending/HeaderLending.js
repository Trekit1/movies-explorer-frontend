import './HeaderLending.css';
import logoHeader from '../../images/logoPromoHeader.svg';

function HeaderLending() {
    return(
        <header className='header-lending'>
          <img src={logoHeader} className='header-lending__logo' alt='Logo'/>
          <div className='header-lending__links'>
            <p className='header-lending__link'>Регистрация</p>
            <button className='header-lending__button header-lending__link' >Войти</button>
          </div>
        </header>
    )
}

export default HeaderLending