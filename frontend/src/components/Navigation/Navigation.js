import './Navigation.css';
import { Route, Link, useHistory } from "react-router-dom";

function Navigation() {
    return(
        <div className='navigation'>
            <Link className='navigation__films'>Фильмы</Link>
            <Link className='navigation__saveFilms'>Сохраненные фильмы</Link>
            <Link>
              <button className='navigation__buttonProfile'></button>
            </Link>
        </div>
    )
}

export default Navigation