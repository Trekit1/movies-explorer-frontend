import './MoviesCard.css';
import card from '../../images/card-1.png'
import {useState} from 'react'
import { Route } from "react-router-dom";

function MoviesCard({name}) {

    const [isLiked, setIsLiked] = useState(false)

    function like() {
        setIsLiked(!isLiked)
    }

    const cardLikeButtonClassName = `card__like-button page__link ${
        isLiked ? "card__like-button_active" : " "}`;
    
    return(
        <div className='card'>
            <img src={card} className='card__image' alt='card'/>
            <div className='card__under'>
                <div className='card__info'>
                  <h2 className='card__name'>{name}</h2>
                  <Route path='/movies'><button className={cardLikeButtonClassName} onClick={like}/></Route>
                  <Route path='/saved-movies'><button className='card__delete-button page__link'/></Route>
                </div>
                <p className='card__time'>1ч 47м</p>
            </div>
        </div>
    )
}

export default MoviesCard