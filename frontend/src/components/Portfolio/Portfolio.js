import './Portfolio.css'
import PortfolioLink from '../PortfolioLink/PortfolioLink'

function Portfolio() {

    const linkNames = ['Статичный сайт', 'Адаптивный сайт', 'Одностраничное приложение']

    return(
        <section className='portfolio'>
            <p className='portfolio__title'>Портфолио</p>
            <div className='portfolio__links'>
                {linkNames.map((name) => (
                  <PortfolioLink name={name} key={linkNames.indexOf(name)}/>
                ))}
            </div>
        </section>
    )

}

export default Portfolio

