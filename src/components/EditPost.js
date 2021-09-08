/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/*
- should have a form to create new post or edit existing posts
- when editing, existing data should be populated in the form
*/

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { handleEditPost } from '../actions/posts';

function EditPostView(props) {
  // get the post id from the URL:
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const history = useHistory();

  // first get all Posts, then just the Post we want to edit with the id from the URL:
  const allPosts = useSelector((state) => Object.values(state.posts));
  const postToRender = allPosts.filter((post) => (post.id === id));

  // get the actual posts title, username, category and message from the store:
  const postTitle = postToRender.map((post) => post.title);
  const postUsername = postToRender.map((post) => post.author);
  const postCategory = postToRender.map((post) => post.category);
  const postMessage = postToRender.map((post) => post.body);

  // the states:
  const [title, setTitle] = useState(postTitle);
  const [username, setUsername] = useState(postUsername);
  const [category, setCategory] = useState(postCategory);
  const [message, setMessage] = useState(postMessage);

  const handleSubmit = (event) => {
    const post = {
      title,
      body: message,
      author: username,
      category,
      id,
    };
    event.preventDefault();
    dispatch(handleEditPost(post));
    history.push('/');
  };

  return (
    <div className="flex h-screen justify-center">
      <div className="w-full max-w-xs m-auto">
        <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="posttitle">
              Post Title
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight hover:border-lime-300 focus:outline-none focus:border-lime-500"
                name="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight hover:border-lime-300 focus:outline-none focus:border-lime-500"
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
          </div>
          <div className="mb-4 inline-block relative w-64">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
              <select className="block appearance-none w-full bg-white text-gray-700 leading-tight border hover:border-lime-300 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:border-lime-500" name="category" onChange={(event) => setCategory(event.target.value)}>
                <option value={category}>{category}</option>
                <option key="react" value="react">React</option>
                <option key="redux" value="redux">Redux</option>
                <option key="udacity" value="udacity">Udacity</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight hover:border-lime-300 focus:outline-none focus:border-lime-500"
                name="message"
                type="text"
                placeholder="Your Text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={280}
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="font-bold bg-lime-300 text-black uppercase text-sm border border-black shadow-offset-black hover:bg-lime-500 py-2 px-4 focus:outline-none focus:shadow-outline active:shadow-none"
              type="submit"
              disabled={postTitle === '' || username === '' || category === '' || message === ''}
            >
              Edit
            </button>
            <Link className="inline-block align-baseline font-bold uppercase text-sm text-black-500 hover:text-red-500" to="/">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPostView;
