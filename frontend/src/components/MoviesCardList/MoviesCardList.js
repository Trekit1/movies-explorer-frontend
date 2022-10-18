import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({cards}) {
   
    return(
        <div className='moviesCardList'>
            {cards.map((card) => (
                <MoviesCard name={card}/>))}
        </div>
    )
}

export default MoviesCardList