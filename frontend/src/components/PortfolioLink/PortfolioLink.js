import './PortfolioLink.css';
import strelka from '../../images/portfolioStr.svg';

function PortfolioLink({name}) {

    return(
      <div className='portfolio__link'>
          <p className='portfolio__link-name'>{name}</p>
          <img src={strelka} className='portfolio__link-img' alt='strelka'/>
      </div>
    )
}

export default PortfolioLink