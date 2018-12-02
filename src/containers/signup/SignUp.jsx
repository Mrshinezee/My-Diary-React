// third-party libraries
import { connect } from 'react-redux';

// components
import SignUpPage from '../../components/signup/SignUpPage';

// action
import { userRegisterRequest } from '../../action/register';


const mapDispatchToProps = dispatch => ({
  register: detail => dispatch(userRegisterRequest(detail))
});
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);