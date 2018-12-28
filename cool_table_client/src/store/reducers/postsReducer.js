import * as actions from "../constants";

const initialStateSearch = {
  searchField: ""
};

export const searchPosts = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case actions.CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};

const initialStatePosts = {
  posts: [],
  requesting: false,
  singlePost: [],
  editPost: null,
  error: null
};

export const postsReducer = (state = initialStatePosts, action = {}) => {
  switch (action.type) {
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
        posts: [...state.posts, action.payload],
        requesting: false,
        error: null
      };
    case actions.FETCH_PATCH_POST:
      return {
        ...state,
        editPost: action.payload
      };
    case actions.PATCH_POST:
      return {
        ...state,
        requesting: true
      };
    case actions.PATCH_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        requesting: false,
        editPost: null,
        error: null
      };
    case actions.DELETE_POST:
      return {
        ...state,
        requesting: true
      };
    case actions.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: [
          ...state.posts.filter(post => post.id !== Number(action.payload))
        ]
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
