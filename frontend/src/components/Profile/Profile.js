import './Profile.css';
import Header from '../Header/Header';

function Profile({onOpen}) {
    return(
        <>
         <Header onOpen={onOpen}/>
        <section className='profile'>
            <h2 className='profile__title'>Привет, Виталий!</h2>
            <div className='profile__box_name'>
                <p className='profile__name-string'>Имя</p>
                <p className='profile__user-info'>Виталий</p>
            </div>
            <div className='profile__box_email'>
                <p className='profile__name-string'>E-mail</p>
                <p className='profile__user-info'>pochta@yandex.ru</p>
            </div>
            <p className='profile__edit-button page__link'>Редактировать</p>
            <p className='profile__logout-button page__link'>Выйти из аккаунта</p>

        </section>
        </>
    )
}

export default Profile