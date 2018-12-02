// react libraries
import React, { Component, Fragment } from 'react';
// import { Redirect } from 'react-router-dom';

// third-party libraries
import PropTypes from 'prop-types';

// components


/**
 * @param {func} event
 * @desc renders login form
 * @class LoginForm
 * @extends {Component}
 */
class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { login } = this.props;
    login(this.state);
  }

  render() {
    // if (props.auth.isAuth === true) {
    //   return (
    //         <Redirect to='/'/>
    //   );
    // }
    return (
      <Fragment>
        <div id="authform">
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
              <input type="password" id="password"  name="password" placeholder="Password" value={this.state.password}
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
  auth: PropTypes.object
};

export default LoginForm;
