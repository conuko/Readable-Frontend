/* eslint-disable no-shadow */
/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-debugger */
import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  INCREMENT_COMMENT_COUNTER,
  DECREMENT_COMMENT_COUNTER,
} from '../actions/posts';

export default function posts(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      const { posts } = action;
      return {
        ...state,
        [posts.id]: posts,
      };
    case DELETE_POST: {
      const { id } = action.post;
      const { [id]: value, ...remainingPosts } = state;
      return {
        remainingPosts,
      };
    }
    case ADD_POST:
      debugger;
      return {
        ...state,
        [action.post.data.id]: action.post.data,
      };
    case INCREMENT_COMMENT_COUNTER:
      return {
        ...state,
        [action.post.id]: {
          ...state[action.post.id],
          commentCount: state[action.post.id].commentCount + 1,
        },
      };
    case DECREMENT_COMMENT_COUNTER:
      return {
        ...state,
        [action.post.id]: {
          ...state[action.post.id],
          commentCount: state[action.post.id].commentCount - 1,
        },
      };
    default:
      return state;
  }
}
