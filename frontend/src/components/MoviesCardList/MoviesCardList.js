import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({cards}) {
   
    return(
        <section className='moviesCardList'>
            {cards.map((card) => (
                <MoviesCard name={card}/>))}
        </section>
    )
}

export default MoviesCardList