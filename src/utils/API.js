import axios from 'axios';

// Global axios defaults
axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.common.Authorization = 'whatever-you-want';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// function to generate a random ID
function generateID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/* <==================== CATEGORIES ====================> */

export function getCategories() {
  return axios.get('/categories');
}

/* <==================== POSTS ====================> */

// get all Posts
export function fetchPosts() {
  return axios.get('/posts');
}

// get all Posts from one Category
export function getPostsByCategory(category) {
  return axios.get(`/${category}/posts`);
}

// get a single Post
export function fetchPost(id) {
  return axios.get(`/posts/${id}`);
}

// create a Post
export function createPost({
  title, body, author, category,
}) {
  const data = {
    id: generateID,
    timestamp: Date.now(),
    title,
    body,
    author,
    category,
  };
  return axios.post('/posts', data);
}

// edit a Post
export function changePost(id, { title, body }) {
  return axios.put(`/posts/${id}`, { title, body });
}

// vote a Post
export function upDownPost(id, vote) {
  return axios.post(`/posts/${id}`, { option: vote });
}

// delete a Post
export function removePost(id) {
  return axios.delete(`/posts/${id}`);
}

/* <==================== COMMENTS ====================> */

// get all Comments of a Post
export function getComments(id) {
  return axios.get(`/posts/${id}/comments`);
}

// get one Comment
export function getComment(commentId) {
  return axios.get(`/comments/${commentId}`);
}

// create a Comment
export function createComment(postId, { body, author }) {
  return axios.post('/comments', {
    id: generateID,
    parentId: postId,
    timestamp: Date.now(),
    body,
    author,
  });
}

// edit a Comment
export function editComment(commentId, { body }) {
  return axios.put(`/comments/${commentId}`, {
    timestrap: Date.now(),
    body,
  });
}

// vote a Comment
export function voteComment(commentId, vote) {
  return axios.post(`/comments/${commentId}`, { option: vote });
}

// delete a Comment
export function deleteComment(commentId) {
  return axios.delete(`/comments/${commentId}`);
}

// create the next steps with help of the following ressources:
// https://github.com/alanleite/udacity-react-readable/blob/master/frontend/src/module/api.js
// https://github.com/filipenatanael/reactnd-project-readable/blob/bdbdba69125d02cf6b9d27aece7e5afd8a5ddeb6/src/actions/post.js#L89
