import * as actions from "../actions";

const initialState = {
  isLoggedIn: false,
  user: {},
  token: "",
  mobilenavopen: "closed",
  error: null
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MOBILE_NAV_TOGGLE:
      return {
        ...state,
        mobilenavopen: action.payload === "closed" ? "open" : "closed"
      };
    case actions.LOGGING_IN_SUCCESS:
      return {
        ...state,
        user: action.user.payload,
        token: action.token.payload,
        isLoggedIn: true,
        error: null
      };
    case actions.RES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default navReducer;
