/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/*
You can use the BooksAPI.js file from the MyReads Project as a guide
for designing your own API calls for this project.
*/

const workOnLocalhost = true;

let api = '';
if (workOnLocalhost) api = 'http://localhost:5001';

// Generate a unique token for storing your bookshelf data on the backend server.
let { token } = localStorage;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

// GET ALL INITIAL DATA (POSTS):
/* export const getAll = () => fetch(`${api}/books`, { headers })
  .then((res) => res.json())
  .then((data) => data.books); */
export const getInitialData = () => fetch(`${api}/posts`, { headers })
  .then((res) => res.json())
  .then((data) => data.posts);

// GET /:category/posts
/* USAGE:
Get all of the posts for a particular category
*/
export const getPostByCategory = (category) => fetch(`${api}/${category}/posts`, {
  method: 'GET',
  headers: {
    ...headers,
    'Content-Type': 'applications/json',
  },
})
  .then((res) => res.json())
  .then((data) => data.posts);

/* POST /posts
USAGE:
Add a new post
*/
export const addNewPost = (newPost) => fetch(`${api}/posts`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ newPost }),
})
  .then((res) => res.json())
  .then((data) => data.posts);

/* GET /posts/:id
USAGE:
Get the details of a single post
*/
export const getSinglePost = () => fetch(`${api}/posts/${id}`, { headers })
  .then((res) => res.json())
  .then((data) => data.post);

/* export const get = (bookId) => fetch(`${api}/books/${bookId}`, { headers })
  .then((res) => res.json())
  .then((data) => data.book);

export const update = (book, shelf) => fetch(`${api}/books/${book.id}`, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ shelf }),
}).then((res) => res.json());

export const search = (query) => fetch(`${api}/search`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query }),
}).then((res) => res.json())
  .then((data) => data.books);
 */
