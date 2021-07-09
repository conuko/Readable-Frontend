/* eslint-disable no-shadow */
import {
  getPostsByCategory,
  createPost,
  upDownPost,
  removePost,
  countComment,
} from '../utils/API';

/* <==================== ACTIONS ====================> */
export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const INCREMENT_COMMENT_COUNTER = 'INCREMENT_COMMENT_COUNTER';
export const DECREMENT_COMMENT_COUNTER = 'DECREMENT_COMMENT_COUNTER';

/* <==================== ACTION CREATORS ====================> */
// get all Posts
export const getPosts = (posts) => ({
  type: GET_POSTS,
  posts,
});

const addPost = (post) => ({
  type: ADD_POST,
  post,
});

const deletePost = (post) => ({
  type: DELETE_POST,
  post,
});

const incrementCommentCounter = ({ post, count }) => ({
  type: DECREMENT_COMMENT_COUNTER,
  post,
  count,
});

const decrementCommentCounter = ({ post, count }) => ({
  type: INCREMENT_COMMENT_COUNTER,
  post,
  count,
});

/* <==================== ASYNC ACTION CREATORS ====================> */
// get all Posts from one Category
export const handleGetPostByCategory = (category) => (dispatch) => getPostsByCategory(category)
  .then(({ posts }) => {
    dispatch(getPosts(posts));
  });

// add a Post
export const handleAddPost = (newPost) => (dispatch) => createPost(newPost)
  .then(({ post }) => {
    dispatch(addPost(post));
  });

// delete a Post
export const handleDeletePost = (id) => (dispatch) => removePost(id)
  .then(({ post }) => {
    dispatch(deletePost(post));
  });

// upvote or downvote a Post
export const handleVotePost = (id, vote) => (dispatch) => upDownPost(id, vote)
  .then(({ data }) => {
    dispatch(addPost({ data }));
  });

// edit a Post
/*
export const handleEditPost = (id, title, body, author, category) => (dispatch) => changePost(id, {
  title, body, author, category,
})
  .then(({ data }) => {
    dispatch(addPost({ data }));
  });
*/

// increment the Comment Counter
export const handleIncrementCommentCounter = (id,
  commentCount) => (dispatch) => countComment(id, commentCount)
  .then(({ post, count }) => {
    dispatch(incrementCommentCounter(post, count));
  });

export const handleDecrementCounter = (id,
  commentCount) => (dispatch) => countComment(id, commentCount)
  .then(({ post, count }) => {
    dispatch(decrementCommentCounter(post, count));
  });
