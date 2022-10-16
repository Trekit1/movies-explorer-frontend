import './Promo.css'
import logoHeader from '../../images/logoPromoHeader.svg'
import logoMain from '../../images/logoPromoMain.svg'

function Promo() {
    return(
        <section className='promo'>
          <div className='promo-header'>
            <img src={logoHeader} className='promo-header__logo' alt='Logo'/>
            <div className='promo-header__links'>
              <p className='promo-header__link'>Регистрация</p>
              <button className='promo-header__button promo-header__link' >Войти</button>
            </div>
          </div>
          <div className='promo-main'>
            <img src={logoMain} className='promo-main__logo' alt='Logo'/>
            <h1 className='promo-main__title'>Учебный проект студента факультета Веб-разработки.</h1>
          </div>
        </section>
    )
}

export default Promo