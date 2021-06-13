import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  VOTE_POST,
  EDIT_POST,
  INCREMENT_COMMENT_COUNTER,
  DECREMENT_COMMENT_COUNTER,
} from '../actions/posts';

export default function posts(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        ...action.posts,
      };
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: {
          ...state[action.post.id],
          ...action.post,
        },
      };
    case DELETE_POST: {
      const { id } = action.post;
      const { [id]: value, ...remainingPosts } = state;
      return {
        remainingPosts,
      };
    }
    case VOTE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...state[action.post.id],
          voteScore: action.option,
        },
      };
    case EDIT_POST:
      return {
        ...state,
        [action.post.id]: {
          ...state[action.post.id],
          title: action.post.title,
          body: action.post.body,
          author: action.post.author,
          category: action.post.category,
        },
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
