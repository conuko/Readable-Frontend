import { getPostByCategory, addNewPost } from '../utils/readable-api';

export const GET_POSTS = 'GET_POSTS';
/* export const GET_POST_BY_CATEGORY = 'GET_POST_BY_CATEGORY'; */
export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const EDIT_POST = 'EDIT_POST';
export const INCREMENT_COMMENT_COUNTER = 'INCREMENT_COMMENT_COUNTER';

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts,
  };
}

/* export function getPostByCategory({ post, category }) {
  return {
    type: GET_POST_BY_CATEGORY,
    post,
    category,
  };
} */

export const handleGetPostByCategory = (category) => (dispatch) => getPostByCategory(category)
  .then(({ posts }) => {
    dispatch(getPosts(posts));
  });

export function getPost({ post, id }) {
  return {
    type: GET_POST,
    post,
    id,
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export const handleAddPost = (newPost) => (dispatch) => addNewPost(newPost)
  .then(({ post }) => {
    dispatch(addPost(post));
  });

export const deletePost = ({ post, id }) => ({
  type: DELETE_POST,
  post,
  id,
});

export const handleDeletePost = () => {

};

export const votePost = ({ post, id, option }) => ({
  type: VOTE_POST,
  post,
  id,
  option,
});

export const handleVotePost = () => {

};

export const editPost = ({ posts, id, post }) => ({
  type: EDIT_POST,
  posts,
  id,
  post,
});

export const handleEditPost = () => {

};

export const incrementCommentCounter = ({ post, id, count }) => ({
  type: INCREMENT_COMMENT_COUNTER,
  post,
  id,
  count,
});

export const handleIncrementCommentCounter = () => {

};
