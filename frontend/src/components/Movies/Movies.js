import './Movies.css';
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import '../App/App.css';


function Movies({onOpen}) {

    const cards = ['Ыыфв фывфы', 'Ыыфв фывфы', 'Ыыфв фывфы','Ыыфв фывфы', 'Ыыфв фывфы', 'Ыыфв фывфы','Ыыфв фывфы', 'Ыыфв фывфы', 'Ыыфв фывфы','Ыыфв фывфы', 'Ыыфв фывфы', 'Ыыфв фывфы']

    return(
        <>
        <Header onOpen={onOpen}/>
        <SearchForm/>
        <MoviesCardList cards= {cards}/>
        <div className='movies__more'>
            <button className='movies__more-button page__link'>Еще</button>
        </div>
        <Footer/>
        </>
    )
}

export default Movies