import {
  ADD_COMMENT,
} from '../actions/comments';

export default function comments(state = {}, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment,
      };
    default:
      return state;
  }
}
