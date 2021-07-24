import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT,
} from '../actions/comments';

export default function comments(state = {}, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment,
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        [action.comment.id]: {
          ...state[action.comment.id],
          body: action.comment.body,
          author: action.comment.author,
        },
      };
    case VOTE_COMMENT:
      return {
        ...state,
        [action.comment.id]: {
          ...state[action.comment.id],
          voteScore: action.option,
        },
      };
    case DELETE_COMMENT: {
      const { id } = action.comment;
      const { [id]: value, ...remainingComments } = state;
      return {
        remainingComments,
      };
    }
    default:
      return state;
  }
}
