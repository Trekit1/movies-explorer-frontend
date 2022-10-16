import './NavTab.css'

function NavTab() {
    return (
        <div className = 'navTab'>
            <nav className='navTab__box'>
                <li className='navTab__link'>О проекте</li>
                <li className='navTab__link'>Технологии</li>
                <li className='navTab__link'>Студент</li>
            </nav>
        </div>
    )
}

export default NavTab