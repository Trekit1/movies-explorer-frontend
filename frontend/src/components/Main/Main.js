import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import HeaderLending from '../HeaderLending/HeaderLending';

function Main() {
    return(
        <>
        <HeaderLending/>
        <main>
          <Promo/>
          <NavTab/>
          <AboutProject/>
          <Techs/>
          <AboutMe/>
          <Portfolio/>
        </main>
        <Footer/>
        </>
    )
}

export default Main