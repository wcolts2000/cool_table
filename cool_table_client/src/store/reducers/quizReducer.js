import * as actions from "../constants";

const initialStateQuizzes = {
  requesting: false,
  quizzes: [],
  singleQuiz: [],
  questions: [],
  correct: 0,
  quizFinished: false,
  error: null
};

export const quizzesReducer = (state = initialStateQuizzes, action = {}) => {
  switch (action.type) {
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
