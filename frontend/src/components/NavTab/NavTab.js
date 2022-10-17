import './NavTab.css'

function NavTab() {
    return (
        <div className = 'navTab'>
            <nav className='navTab__box'>
                <a href='#aboutProject' className='navTab__link'>О проекте</a>
                <a href='#techs' className='navTab__link'>Технологии</a>
                <a href='#student' className='navTab__link'>Студент</a>
            </nav>
        </div>
    )
}

export default NavTab