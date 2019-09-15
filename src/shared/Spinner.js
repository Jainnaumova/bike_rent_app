import React from 'react';

import './spinner.css';

export default () => {
  return (
    <div className='container'>
      <div className='loader' />
      <div className='loader_text'>Loading Data...</div>
    </div>
  );
}
