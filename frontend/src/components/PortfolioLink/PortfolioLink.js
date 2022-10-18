import './PortfolioLink.css';
import strelka from '../../images/portfolioStr.svg';
import '../App/App.css';

function PortfolioLink({name}) {

    return(
      <div className='portfolio__link'>
          <p className='portfolio__link-name'>{name}</p>
          <img src={strelka} className='portfolio__link-img page__link' alt='strelka'/>
      </div>
    )
}

export default PortfolioLink