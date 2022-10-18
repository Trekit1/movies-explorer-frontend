import './SearchForm.css'
import '../App/App.css';

function SearchForm() {

    return(
        <section className='searchForm'>
            <div className='searchForm__search'>
              <input className='serchForm__input' placeholder='Фильм'/>
              <button className='searchForm__button page__link'>Найти</button>
            </div>
            <div className='searchForm__filter'>
              <input type='checkbox' className='searchForm__checkbox'/>
              <p className='searchForm__filter-text'>Короткометражки</p>
            </div>
            
        </section>
    )
}

export default SearchForm