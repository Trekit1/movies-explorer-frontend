import './Navigation.css';
import { Link} from "react-router-dom";
import '../App/App.css';
import Menu from '../Menu/Menu';


function Navigation({onOpen}) {

    return(
        <div className='navigation'>
            <Link to='/movies' className='navigation__films page__link'>Фильмы</Link>
            <Link to='/saved-movies' className='navigation__save-films page__link'>Сохраненные фильмы</Link>
            <Link to='/profile'>
              <button className='navigation__button-profile page__link'></button>
            </Link>
            <button className='navigation__button-menu page__link' onClick={onOpen}/>
        </div>
    )
}

export default Navigation