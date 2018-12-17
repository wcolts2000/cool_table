import * as actions from "../actions";

const initialState = {
  isLoggedIn: false,
  user: {},
  token: "",
  mobilenavopen: "closed",
  requesting: false,
  error: null
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MOBILE_NAV_TOGGLE:
      return {
        ...state,
        mobilenavopen: action.payload === "closed" ? "open" : "closed"
      };
    case actions.LOGGING_IN:
      return {
        ...state,
        requesting: true
      };
    case actions.LOGGING_IN_SUCCESS:
      console.log("reducers payload: ", action.payload);

      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        requesting: false,
        error: null
      };
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
    case actions.RES_FAILURE:
      return {
        ...state,
        requesting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default navReducer;
