import {
  getComments,
  createComment,
  editComment,
  upDownComment,
  removeComment,
} from '../utils/API';

/* <==================== ACTIONS ====================> */
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const VOTE_COMMENT = 'VOTE_COMMENT';

/* <==================== ACTION CREATORS ====================> */
const getPostComments = (comments) => ({
  type: GET_POST_COMMENTS,
  comments,
});

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
});

const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

const voteComment = (comment, option) => ({
  type: VOTE_COMMENT,
  comment,
  option,
});

const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment,
});

/* <==================== ASYNC ACTION CREATORS ====================> */
export const handleGetComments = (postId) => (dispatch) => getComments(postId)
  .then(({ comments }) => {
    dispatch(getPostComments(comments));
  });

export const handleAddComment = (
  postId, body, author,
) => (dispatch) => createComment(postId, { body, author })
  .then(({ comment }) => {
    dispatch(addComment(comment));
  });

export const handleUpdateComment = (
  commentId, body, author,
) => (dispatch) => editComment(commentId, { body, author })
  .then(({ comment }) => {
    dispatch(updateComment(comment));
  });

export const handleVoteComment = (commentId, vote) => (dispatch) => upDownComment(commentId, vote)
  .then(({ comment, option }) => {
    dispatch(voteComment(comment, option));
  });

export const handleDeleteComment = (commentId) => (dispatch) => removeComment(commentId)
  .then(({ comment }) => {
    dispatch(deleteComment(comment));
  });
