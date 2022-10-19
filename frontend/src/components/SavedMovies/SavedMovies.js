import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({onOpen}) {

    const savedCards = ['Коты00', 'Собаки', 'Кошки']

    return(
        <>
        <Header onOpen={onOpen}/>
        <main>
          <SearchForm/>
          <MoviesCardList cards={savedCards}/>
          <div className='savedMovies__saveddevider'></div>
        </main>
        <Footer/>
        </>
    )
}

export default SavedMovies