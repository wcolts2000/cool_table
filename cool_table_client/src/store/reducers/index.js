import * as actions from "../actions";

const initialState = {
  isLoggedIn: false,
  user: {},
  token: "",
  mobilenavopen: "closed",
  requesting: false,
  quizzes: [],
  singleQuiz: [],
  questions: [],
  posts: [],
  singlePost: [],
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
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
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
    case actions.FETCHING_QUIZZES:
      return {
        ...state,
        requesting: true
      };
    case actions.FETCHING_QUIZZES_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: null,
        quizzes: [...action.payload]
      };
    case actions.FETCHING_POSTS:
      return {
        ...state,
        requesting: true
      };
    case actions.FETCHING_POSTS_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: null,
        posts: [...action.payload]
      };
    case actions.FETCHING_SINGLE_POST:
      return {
        ...state,
        requesting: true
      };
    case actions.FETCHING_SINGLE_POST_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: null,
        singlePost: [action.payload]
      };
    case actions.FETCHING_SINGLE_QUIZ:
      return {
        ...state,
        requesting: true
      };
    case actions.FETCHING_SINGLE_QUIZ_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: null,
        singleQuiz: [action.payload]
      };
    case actions.FETCHING_QUESTIONS_SUCCESS:
      return {
        ...state,
        requesting: false,
        error: null,
        questions: [...action.payload]
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
