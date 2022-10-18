import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import Menu from '../Menu/Menu';
import React, { useState, useEffect } from "react";
import { Route, Switch} from "react-router-dom";


function App() {

  const [isMenu, setIsMenu] = useState(false)

  function openMenu() {
    setIsMenu(true)
  }

  function closeMenu() {
    setIsMenu(false)
  }

    return(
        <div className="page">
              <Switch>
                <Route exact path='/'>
                  <Main />
                </Route>
                <Route path='/movies'>
                  <Movies onOpen={openMenu}/>
                </Route>
                <Route path='/saved-movies'>
                  <SavedMovies onOpen={openMenu}/>
                </Route>
                <Route path='/profile'>
                  <Profile onOpen={openMenu}/>
                </Route>
                <Route path='/signup'>
                  <Register/>
                </Route>
                <Route path='/signin'>
                  <Login/>
                </Route>
              </Switch>
              <Menu isOpen={isMenu} onClose={closeMenu}/>
        </div>
    )

}

export default App