import * as actions from "../constants";

const initialStateNav = {
  mobilenavopen: "closed"
};

export const navReducer = (state = initialStateNav, action = {}) => {
  switch (action.type) {
    case actions.MOBILE_NAV_TOGGLE:
      return {
        ...state,
        mobilenavopen: action.payload === "closed" ? "open" : "closed"
      };
    default:
      return state;
  }
};
