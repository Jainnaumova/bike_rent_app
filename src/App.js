import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './shared/Navbar';
import AllBikes from './AllBikes';
import ConfirmationForm from './ConfirmationForm';

import './App.css';

const App = () => {
  return (
    <HashRouter>
      <div className='app-container'>
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className='main-container'>
          <Switch>
            <Route path='/' exact component={ AllBikes } />
            <Route path='/confirm' exact component={ ConfirmationForm } />
          </Switch>
        </div>
        <div className='footer-container'></div>
      </div>
    </HashRouter>
  );
}

export default App;
