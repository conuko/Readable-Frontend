import {
  getComments,
  createComment,
  editComment,
  upDownComment,
  removeComment,
} from '../utils/API';

/* <==================== ACTIONS ====================> */
export const ADD_COMMENT = 'ADD_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

/* <==================== ACTION CREATORS ====================> */

const addComment = (comment) => ({
  type: ADD_COMMENT,
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
  .then((comments) => {
    comments.forEach((comment) => {
      dispatch(addComment(comment));
    });
  });

export const handleAddComment = (newComment) => (dispatch) => createComment(newComment)
  .then((comment) => {
    dispatch(addComment(comment));
  });

export const handleUpdateComment = (
  commentId, body, author,
) => (dispatch) => editComment(commentId, { body, author })
  .then(({ comment }) => {
    dispatch(addComment(comment));
  });

export const handleVoteComment = (commentId, vote) => (dispatch) => upDownComment(commentId, vote)
  .then(({ comment, option }) => {
    dispatch(voteComment(comment, option));
  });

export const handleDeleteComment = (commentId) => (dispatch) => removeComment(commentId)
  .then(({ comment }) => {
    dispatch(deleteComment(comment));
  });
