import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  DELETE_POST,
  VOTE_POST,
  EDIT_POST,
  INCREMENT_COMMENT_COUNTER,
} from '../actions/posts';

export default function posts(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return {};
    case GET_POST:
      return {};
    case ADD_POST:
      return {};
    case DELETE_POST:
      return {};
    case VOTE_POST:
      return {};
    case EDIT_POST:
      return {};
    case INCREMENT_COMMENT_COUNTER:
      return {};
    default:
      return state;
  }
}
