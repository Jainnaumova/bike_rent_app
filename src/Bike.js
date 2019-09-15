import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './bikes.css';

export class Bike extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(bikeData) {
    this.props.history.push({
      pathname: '/confirm',
      bikeData
    });
  }

  render() {

    const { bike } = this.props;
    return (
      <div className='bike-cart'>
        <img src={bike.image} alt='bike'/>
        <div className='bike-description'>
          <h3>{bike.name}</h3>
          <p>{bike.product_type}</p>
          <p>Hourly: ${bike.price}</p>
        </div>
        <div
          className='rent-button'
          onClick={() => this.handleClick(bike)}>
          Rent Now
        </div>
      </div>
    );
  }
}

export default withRouter(Bike);
