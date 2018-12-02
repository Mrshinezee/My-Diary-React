// react libraries
import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

// third-party libraries
import PropTypes from 'prop-types';
import Loader from 'react-loader';

// components


/**
 * @param {func} event
 * @desc renders login form
 * @class LoginForm
 * @extends {Component}
 */
class LoginForm extends Component {

  state = {
    email: 'shinezee54@gmail.com',
    password: 'shine1234',
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { login } = this.props;
    login(this.state);
  }

  
  // setTimeout(() => this.props.pullEntries(), 2000);

  render() {
    const { props } = this;
    const loading = props.auth.login.processing ? { display: 'block' } : { display: 'none' };
    if (props.auth.isAuth === true) {
      // setTimeout(() => {
        return(
          <Redirect to='/allEntry' />
        )
      // }, 1000);
    }


    return (
      <Fragment>
        <div id="authform">
          <div style={loading}>
            <Loader color="#007bff" speed={1} className="spinner" />
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="centring-div">
              <h4>LOG IN</h4>
              <p id="loginMessage"></p>
              <p id="loginSuccess"></p>
            </div>
            <p>
              <input type="email" id="email" name="email" placeholder="Email" value={this.state.email}
                onChange={this.onChange} required />
            </p>
            <p id="emailError" className="alert-class"></p>
            <p>
              <input type="password" id="password" name="password" placeholder="Password" value={this.state.password}
                onChange={this.onChange} required />
            </p>
            <p id="passwordError" className="alert-class"></p>
            <p className="sign-up">
              <button type="submit" id="authUser" >Login</button>
            </p>
          </form>
        </div>
      </Fragment>
    );
  }
}
LoginForm.propTypes = {
  login: PropTypes.func,
  history: PropTypes.func,
  auth: PropTypes.object,
};

export default LoginForm;
