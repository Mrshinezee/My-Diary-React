/**
 * @desc the initial state on the application
*/
const initialState = {
    auth: {
      login: {
        processing: false,
        error: '',
      },
      signup: {
        processing: false,
        errors: {},
      },
      user: {
  
      },
      isAuth: false,
      token: '',
    },
    userEntry: {
      entries: [],
      loading: false
    },
  };
  
  export default initialState;
