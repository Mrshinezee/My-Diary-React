// react libraries
import React from 'react';
import { Redirect } from 'react-router-dom';

// third party libraries
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// action
import { logOutUser } from '../../action/auth';

/**
 * @desc renders home page
 * @param {props} props
 * @return {object} redirect
 */
const Auth = (props) => {
  localStorage.removeItem('diaryToken');
  localStorage.removeItem('diaryUser');
  localStorage.removeItem('diaryName');
  props.logout();
  return (
    <Redirect to='/' />
  );
};

Auth.propTypes = {
  logout: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOutUser())
});

export default connect(null, mapDispatchToProps)(Auth);
