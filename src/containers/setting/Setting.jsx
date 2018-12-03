// third-party libraries
import { connect } from 'react-redux';

// components
import SettingPage from '../../components/setting/SettingPage';

// action
import { userLoginRequest } from '../../action/login';


const mapDispatchToProps = dispatch => ({
  login: detail => dispatch(userLoginRequest(detail))
});
const mapStateToProps = state => ({
  auth: state.auth,
  entries: state.entries,
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage);