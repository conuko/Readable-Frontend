import {
  getComments,
  createComment,
  editComment,
  upDownComment,
  removeComment,
} from '../utils/API';

/* <==================== ACTIONS ====================> */
export const ADD_COMMENT = 'ADD_COMMENT';

/* <==================== ACTION CREATORS ====================> */

const addComment = (comment) => ({
  type: ADD_COMMENT,
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
  .then(({ data }) => {
    dispatch(addComment(data));
  });

export const handleDeleteComment = (commentId) => (dispatch) => removeComment(commentId)
  .then((comment) => {
    dispatch(addComment(comment));
  });
