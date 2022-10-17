import './Promo.css';
import logoMain from '../../images/logoPromoMain.svg';
import HeaderLending from '../HeaderLending/HeaderLending';

function Promo() {
    return(
      <>
        <HeaderLending/>
        <section className='promo'>
          <div className='promo-main'>
            <img src={logoMain} className='promo-main__logo' alt='Logo'/>
            <h1 className='promo-main__title'>Учебный проект студента факультета Веб-разработки.</h1>
          </div>
        </section>
      </>
     
    )
}

export default Promo