import React, { Component } from 'react';

import Bike from './Bike';
import Spinner from './shared/Spinner';

import { getBikes } from './seed';

import './bikes.css';

class AllBikes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bikes: null,
      spinner: true,
    }
  }

  async componentDidMount(){
    const data = await getBikes();
    this.setState({ bikes: data, spinner: false });
  }

  renderList() {
    return (
      <div className='bikes-group'>
        {this.state.bikes.map(bike => (
          <div className='bike-wrapper' key={bike.id}>
            <Bike
              bike={bike}
            />
          </div>
        ))}
      </div>
    );
  }

  renderEmptyList() {
    return (
      <div className='empty-table'>
        No Bikes Found
      </div>
    );
  }

  displayContent() {
    if (this.state.spinner) {
      return <Spinner />;
    } else if (!this.state.spinner && !this.state.bikes.length) {
      return this.renderEmptyList();
    } else {
      return this.renderList();
    }
  }

  render() {
    return (
      <div className="bikes-container">
        {this.displayContent()}
      </div>
    );
  }
}

export default AllBikes;
