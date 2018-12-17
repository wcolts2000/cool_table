import axios from "axios";

export const URL = "https://lambda-study-app.herokuapp.com/api/";

export const REGISTER_USER = "REGISTER_USER",
  REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS",
  LOGGING_IN = "LOGGING_IN",
  LOGGING_IN_SUCCESS = "LOGGING_IN_SUCCESS",
  MOBILE_NAV_TOGGLE = "MOBILE_NAV_TOGGLE",
  FETCHING_QUIZZES = "FETCHING_QUIZZES",
  FETCHING_QUIZZES_SUCCESS = "FETCHING_QUIZZES_SUCCESS",
  FETCHING_SINGLE_QUIZ = "FETCHING_SINGLE_QUIZ",
  FETCHING_SINGLE_QUIZ_SUCCESS = "FETCHING_SINGLE_QUIZ_SUCCESS",
  FETCHING_QUIZZES_TOPICS = "FETCHING_QUIZZES_TOPICS",
  FETCHING_QUIZZES_TOPICS_SUCCESS = "FETCHING_QUIZZES_TOPICS_SUCCESS",
  POSTING_QUIZ = "POSTING_QUIZ",
  POSTING_QUIZ_SUCCESS = "POSTING_QUIZ_SUCCESS",
  PATCH_QUIZ = "PATCH_QUIZ",
  PATCH_QUIZ_SUCCESS = "PATCH_QUIZ_SUCCESS",
  DELETE_QUIZ = "DELETE_QUIZ",
  DELETE_QUIZ_SUCCESS = "DELETE_QUIZ_SUCCESS",
  FETCHING_QUESTIONS = "FETCHING_QUESTIONS",
  FETCHING_QUESTIONS_SUCCESS = "FETCHING_QUESTIONS_SUCCESS",
  FETCHING_SINGLE_QUESTION_SUCCESS = "FETCHING_SINGLE_QUESTION_SUCCESS",
  FETCHING_SINGLE_QUESTION = "FETCHING_SINGLE_QUESTION",
  FETCHING_QUESTIONS_RESPONSE = "FETCHING_QUESTIONS_RESPONSE",
  FETCHING_QUESTIONS_RESPONSE_SUCCESS = "FETCHING_QUESTIONS_RESPONSE_SUCCESS",
  POSTING_QUESTION = "POSTING_QUESTION",
  POSTING_QUESTION_SUCCESS = "POSTING_QUESTION_SUCCESS",
  PATCH_QUESTION = "PATCH_QUESTION",
  PATCH_QUESTION_SUCCESS = "PATCH_QUESTION_SUCCESS",
  DELETE_QUESTION = "DELETE_QUESTION",
  DELETE_QUESTION_SUCCESS = "DELETE_QUESTION_SUCCESS",
  FETCHING_POSTS = "FETCHING_POSTS",
  FETCHING_POSTS_SUCCESS = "FETCHING_POSTS_SUCCESS",
  FETCHING_SINGLE_POST = "FETCHING_SINGLE_POST",
  FETCHING_SINGLE_POST_SUCCESS = "FETCHING_SINGLE_POST_SUCCESS",
  POSTING_POST = "POSTING_POST",
  POSTING_POST_SUCCESS = "POSTING_POST_SUCCESS",
  PATCH_POST = "PATCH_POST",
  PATCH_POST_SUCCESS = "PATCH_POST_SUCCESS",
  DELETE_POST = "DELETE_POST",
  DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS",
  FETCHING_COMMENTS = "FETCHING_COMMENTS",
  FETCHING_COMMENTS_SUCCESS = "FETCHING_COMMENTS_SUCCESS",
  FETCHING_SINGLE_COMMENT = "FETCHING_SINGLE_COMMENT",
  FETCHING_SINGLE_COMMENT_SUCCESS = "FETCHING_SINGLE_COMMENT_SUCCESS",
  POSTING_COMMENT = "POSTING_COMMENT",
  POSTING_COMMENT_SUCCESS = "POSTING_COMMENT_SUCCESS",
  PATCHING_COMMENT = "PATCHING_COMMENT",
  PATCHING_COMMENT_SUCCESS = "PATCHING_COMMENT_SUCCESS",
  DELETE_COMMENT = "DELETE_COMMENT",
  DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS",
  RES_FAILURE = "RES_FAILURE";

export const navOpen = mobilenavopen => dispatch => {
  dispatch({ type: MOBILE_NAV_TOGGLE, payload: mobilenavopen });
};

export const registerUser = user => dispatch => {
  dispatch({ type: REGISTER_USER });
  axios
    .post(`${URL}auth/register`, user)
    .then(({ data }) =>
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: RES_FAILURE, payload: err }));
};

export const logIn = user => dispatch => {
  console.log("actions user: ", user);

  dispatch({ type: LOGGING_IN });
  axios
    .post(`${URL}auth/login`, user)
    .then(({ data }) => dispatch({ type: LOGGING_IN_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: RES_FAILURE, payload: err }));
};

export const fetchQuizzes = () => dispatch => {
  dispatch({ type: FETCHING_QUIZZES });
  axios
    .get(`${URL}quizzes/`)
    .then(({ data }) =>
      dispatch({ type: FETCHING_QUIZZES_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: RES_FAILURE, payload: err }));
};

export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCHING_POSTS });
  axios
    .get(`${URL}posts/`)
    .then(({ data }) =>
      dispatch({ type: FETCHING_POSTS_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: RES_FAILURE, payload: err }));
};

export const addSinglePost = post => dispatch => {
  dispatch({ type: POSTING_POST });
  axios
    .post(`${URL}posts`, post)
    .then(({ data }) => dispatch({ type: POSTING_POST_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: RES_FAILURE, payload: err }));
};

export const getSinglePost = id => dispatch => {
  dispatch({ type: FETCHING_SINGLE_POST });
  axios
    .get(`${URL}posts/${id}`)
    .then(({ data }) =>
      dispatch({ type: FETCHING_SINGLE_POST_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: RES_FAILURE, payload: err }));
};
