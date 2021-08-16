/* eslint-disable jsx-a11y/label-has-associated-control */

/*
- should have a form to create new post or edit existing posts
- when editing, existing data should be populated in the form
*/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { handleAddPost } from '../actions/posts';
// import { generateID } from '../utils/API';

function CreatePostView() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [postTitle, setPostTitle] = useState('');
  const [username, setUsername] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    const post = {
      title: postTitle,
      body: message,
      author: username,
      category,
    };
    event.preventDefault();
    dispatch(handleAddPost(post));
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
                value={postTitle}
                onChange={(event) => setPostTitle(event.target.value)}
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
                <option value="">--Select a category--</option>
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
                maxLength={280}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="font-bold bg-lime-300 text-black uppercase text-sm border border-black shadow-offset-black hover:bg-lime-500 py-2 px-4 focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={postTitle === '' || username === '' || category === '' || message === ''}
            >
              Submit
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

export default CreatePostView;
