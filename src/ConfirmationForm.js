import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './bikes.css';

const emailValidator = email => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

const textValidator = text => text === '' ? false : true;

class ConfirmationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      displayPopUp: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleBlur(e) {
    switch(e.target.name) {
      case 'email':
        if (!emailValidator(e.target.value)) {
          this.setState({ validEmail: false });
        } else {
          this.setState({ validEmail: true });
        }
        break;
      case 'firstName':
        if (!textValidator(e.target.value)) {
          this.setState({ validFirstName: false });
        } else {
          this.setState({ validFirstName: true });
        }
        break;
      case 'lastName':
        if (!textValidator(e.target.value)) {
          this.setState({ validLastName: false });
        } else {
          this.setState({ validLastName: true });
        }
        break;
      default:
        return;
    }
  }

  displayEmailError() {
    if (this.state.validEmail === false) {
      return (
        <div className='error-message'>Provide your correct email</div>
      );
    }
  }

  displayFirstNameError() {
    if (this.state.validFirstName === false) {
      return (
        <div className='error-message'>Provide your First Name</div>
      );
    }
  }

  displayLastNameError() {
    if (this.state.validLastName === false) {
      return (
        <div className='error-message'>Provide your Last Name</div>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.validEmail ||
      !this.state.validFirstName ||
      !this.state.validLastName) {
        return;
      } else {
        this.displayPopUp();
        this.setState({ email: '', firstName: '', lastName: '' })
      }
  }

  displayPopUp() {
    this.setState({displayPopUp: true}, () => {
      setTimeout(() => {
        this.setState({displayPopUp: false}, () => this.props.history.push('/'))
      }, 2500);
    });
  }

  render() {
    const { bikeData } = this.props.history.location
    return (
      <div className='confirmation-wrapper'>
        <div className='confirmation-container'>
          <div className='form-container'>
            <h3>Enter Your Info to Proceed</h3>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  onBlur={this.handleBlur}
                  type='email'
                  value={this.state.email}
                  name='email'
                  className='input-form'
                  onChange={this.handleChange}
                  required
                  placeholder='Email'
                  autoFocus
                  tabIndex="1"
                />
                {this.displayEmailError()}
                <input
                  onBlur={this.handleBlur}
                  type='text'
                  value={this.state.firstName}
                  name='firstName'
                  className='input-form'
                  onChange={this.handleChange}
                  required
                  placeholder='First Name'
                  tabIndex="2"
                />
              {this.displayFirstNameError()}
                <input
                  onBlur={this.handleBlur}
                  type='text'
                  value={this.state.lastName}
                  name='lastName'
                  className='input-form'
                  onChange={this.handleChange}
                  required
                  placeholder='Last Name'
                  tabIndex="3"
                />
              {this.displayLastNameError()}
              </div>
              <button type='submit' className='button-submit' tabIndex="4">Proceed To Checkout</button>
            </form>
          </div>
          <div className='summary-container'>
            <h3>Order Summary</h3>
            <div className='summary-description'>
              <div>{bikeData.name}</div>
              <div>{bikeData.product_type}</div>
            </div>
            <div className='summary-total'>
              <div>Total</div>
              <div>${bikeData.price}</div>
            </div>
          </div>
        </div>
        <div>
          {this.state.displayPopUp && (
            <div className="popup">Thank you for order !</div>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(ConfirmationForm);
