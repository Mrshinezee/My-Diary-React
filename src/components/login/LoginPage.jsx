// react libraries
import React, { Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Logo from '../reusables/Logo';
import LoginForm from './LoginForm';

/**
 * @param {object} props
 * @desc renders login page
 * @return {object} login
 */
const LoginPage = props => (
    <Fragment>

        <div className="menu-links">
            <div id="menu-links-left">
                <span><a href="index.html">MY-DIARY</a></span>
            </div>

            <div className="menu-icon">
                <label htmlFor="menu-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <input type="checkbox" id="menu-check" />
            <div className="menu-links-right">
                <a href="sign-up.html">Sign Up</a>
                <a href="login.html">Login</a>
            </div>
        </div>
        <div id="main">
            <div className="centring-div">
                <div id="topic">
                    <div id="logo"></div>
                </div>
            </div>

            <div className="centring-div">
                <h2 id="motto">Your Daily Companion</h2>
            </div>
            <LoginForm
                login={props.login}
                auth={props.auth}
            />
            <div className="centring-div">
                <span id="no_account">Not registered? </span>
                <a href="sign-up.html"> Sign up today?</a>
            </div>
        </div>
    </Fragment>
);

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object
};

export default LoginPage;
