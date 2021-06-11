import {
  GET_POST_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT,
} from '../actions/comments';

export default function categories(state = {}, action) {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return {
        ...state,
        ...action.comments,
      };
    case ADD_COMMENT:
      return {
        ...state,
        ...state.concat(action.comment),
      };
    case UPDATE_COMMENT:
      return {

      };
    case VOTE_COMMENT:
      return {

      };
    case DELETE_COMMENT:
      return {

      };
    default:
      return state;
  }
}
