import * as actions from "../constants";

const initialStateUser = {
  isLoggedIn: false,
  user: {},
  token: "",
  auth: {},
  requesting: false,
  error: null
};

export const userReducer = (state = initialStateUser, action = {}) => {
  switch (action.type) {
    case actions.REGISTER_USER:
      return {
        ...state,
        requesting: true
      };
    case actions.REGISTER_USER_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: null,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true
      };
    case actions.LOGGING_IN:
      return {
        ...state,
        requesting: true
      };
    case actions.LOGGING_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        auth: action.payload,
        isLoggedIn: true,
        requesting: false,
        error: null
      };
    case actions.LOCAL_LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        requesting: false,
        error: null
      };
    case actions.LOG_USER_OUT:
      return {
        ...state,
        user: {},
        token: "",
        isLoggedIn: false
      };
    default:
      return state;
  }
};
