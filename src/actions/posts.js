import {
  getPostsByCategory,
  createPost,
  changePost,
  upDownPost,
  removePost,
  countComment,
} from '../utils/API';

/* <==================== ACTIONS ====================> */
export const GET_POSTS = 'GET_POSTS';
/* export const GET_POST_BY_CATEGORY = 'GET_POST_BY_CATEGORY'; */
export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const EDIT_POST = 'EDIT_POST';
export const INCREMENT_COMMENT_COUNTER = 'INCREMENT_COMMENT_COUNTER';

/* <==================== ACTION CREATORS ====================> */
// get all Posts
export const getPosts = (posts) => ({
  type: GET_POSTS,
  posts,
});

/* const getPost = ({ post, id }) => ({
  type: GET_POST,
  post,
  id,
}); */

const addPost = (post) => ({
  type: ADD_POST,
  post,
});

const deletePost = (post) => ({
  type: DELETE_POST,
  post,
});

const votePost = ({ post, option }) => ({
  type: VOTE_POST,
  post,
  option,
});

const editPost = (post) => ({
  type: EDIT_POST,
  post,
});

const incrementCommentCounter = ({ post, count }) => ({
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
  .then(({ newPost }) => {
    dispatch(addPost(newPost));
  });

// delete a Post
export const handleDeletePost = (id) => (dispatch) => removePost(id)
  .then(({ post }) => {
    dispatch(deletePost(post));
  });

// upvote or downvote a Post
export const handleVotePost = (id, vote) => (dispatch) => upDownPost(id, vote)
  .then(({ post, option }) => {
    dispatch(votePost(post, option));
  });

// edit a Post
export const handleEditPost = (id, title, body, author, category) => (dispatch) => changePost(id, {
  title, body, author, category,
})
  .then(({ post }) => {
    dispatch(editPost(post));
  });

// increment the Comment Counter
export const handleIncrementCommentCounter = (id,
  commentCount) => (dispatch) => countComment(id, commentCount)
  .then(({ post, count }) => {
    dispatch(incrementCommentCounter(post, count));
  });
