import * as actions from "../actions";

const initialState = {
  isLoggedIn: false,
  user: {},
  token: "",
  mobilenavopen: "closed",
  requesting: false,
  quizzes: [],
  auth: {},
  singleQuiz: [],
  questions: [],
  correct: 0,
  quizFinished: false,
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
        quizzes: [...action.payload],
        correct: 0
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
    case actions.POSTING_POST:
      return {
        ...state,
        requesting: true
      };
    case actions.POSTING_POST_SUCCESS:
      return {
        ...state,
        // posts: [...state.posts, action.payload],
        requesting: false,
        error: null
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
    case actions.FETCHING_QUESTIONS_RESPONSE:
      return {
        ...state,
        requesting: true,
        error: null
      };
    case actions.FETCHING_QUESTIONS_RESPONSE_SUCCESS:
      console.log("PAYLOAD", action.payload);
      if (state.questions.length > 1) {
        return {
          ...state,
          correct:
            action.payload.correct === true ? state.correct + 1 : state.correct,
          questions: state.questions.filter(
            question => question.id !== action.payload.question
          ),
          quizFinished: false
        };
      }
      return {
        ...state,
        correct:
          action.payload.correct === true ? state.correct + 1 : state.correct,
        quizFinished: true
      };
    case actions.RESET_QUIZ:
      return {
        ...state,
        quizFinished: false,
        correct: 0
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
