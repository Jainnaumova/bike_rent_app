import React from 'react';

import logo from './TopView.png';

import '../App.css';

export default props => (
  <div>
    <div className='icon-container'>
      <img src={logo} alt='logo' className='icon'/>
    </div>
    <div className='navbar'>TopView SightSeeing<span className='text-blue'>Rent a bike</span></div>
  </div>
)
