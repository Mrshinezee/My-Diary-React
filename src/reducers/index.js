// redux library
import { combineReducers } from 'redux';

// reducers
import login from './login';
import auth from './auth';
import signup from './register';
import entries from './entries';
import entry from './entry';

/**
 * @desc combines all the reducers
*/
export default combineReducers({
  login,
  auth,
  signup,
  entries,
  entry,
});
