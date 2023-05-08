const AuthReducers = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        currentUser: null,
        isLoading: true,
        error: false,
        isLogin: false,
      };
    case "LOGIN_SUCCESS":
      return {
        currentUser: action.payload,
        isLoading: false,
        error: false,
        isLogin: true,
      };
    case "LOGIN_FAILURE":
      return {
        currentUser: null,
        isLoading: false,
        error: true,
        isLogin: false,
      };
    case "LOGOUT":
      return {
        currentUser: null,
        isLoading: false,
        error: false,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default AuthReducers;
