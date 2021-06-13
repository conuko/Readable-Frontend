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
        [action.comment.id]: {
          ...state[action.comment.id],
          ...action.comment,
        },
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
