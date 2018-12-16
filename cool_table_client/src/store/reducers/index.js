import * as actions from "../actions";

const initialState = {
  isLoggedIn: false,
  user: {},
  token: "",
  mobilenavopen: "false"
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.MOBILE_NAV_TOGGLE:
      return {
        ...state,
        mobilenavopen: action.payload === "false" ? "true" : "false"
      };
    default:
      return state;
  }
};

export default navReducer;
