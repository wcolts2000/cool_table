import { userReducer } from "./userReducer";
import { navReducer } from "./navReducer";
import { postsReducer, searchPosts } from "./postsReducer";
import { quizzesReducer } from "./quizReducer";
import { combineReducers } from "redux";

export default combineReducers({
  userReducer,
  searchPosts,
  navReducer,
  postsReducer,
  quizzesReducer
});
