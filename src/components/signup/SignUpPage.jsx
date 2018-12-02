// react libraries
import React, { Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import SignUpForm from './SignUpForm';

/**
 * @param {object} props
 * @desc renders login page
 * @return {object} login
 */
const SignUpPage = props => (
    <Fragment>
        <div id="main">
            <div className="centring-div">
                <div id="topic">
                    <div id="logo"></div>
                </div>
            </div>
            <SignUpForm register={props.register}/>
            <div className="centring-div">
              <span id="no_account">Already have an account ?</span>
              <a href="login.html"> Login </a>
            </div>
        </div>
        <script src="js/signUp.js"></script>
      <script src="js/logout.js"></script>
    <footer>
            <p>My-Diary, Copyright &copy; 2018 </p>
     </footer>
    </Fragment>
);

SignUpPage.propTypes = {
    register: PropTypes.func.isRequired,
    auth: PropTypes.object
};

export default SignUpPage;
