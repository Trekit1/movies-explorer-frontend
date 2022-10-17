import './Header.css';
import logo from '../../images/logoPromoHeader.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
    return(
        <header className='header'>
          <img src={logo} className='header-lending__logo' alt='Logo'/>
          <Navigation/>
        </header>
    )
}

export default Header
