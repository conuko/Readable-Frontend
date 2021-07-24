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

function CreateEditPostView() {
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
    <div>
      <h1>Add a new Post</h1>
      <form className="new-post" onSubmit={handleSubmit}>
        <label>
          Post Title
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={postTitle}
            onChange={(event) => setPostTitle(event.target.value)}
            className="text-area"
          />
        </label>
        <label>
          Username
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="text-area"
          />
        </label>
        <label>
          Category
          <select name="category" onChange={(event) => setCategory(event.target.value)}>
            <option value="">--Select a category--</option>
            <option key="react" value="react">React</option>
            <option key="redux" value="redux">Redux</option>
            <option key="udacity" value="udacity">Udacity</option>
          </select>
        </label>
        <label>
          Message
          <input
            name="message"
            type="text"
            placeholder="Your Text"
            maxLength={280}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="text-area"
          />
        </label>
        <button
          className="submit-button"
          type="submit"
          disabled={postTitle === '' || username === '' || category === '' || message === ''}
        >
          Submit
        </button>
        <Link to="/">
          <button type="button">
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
}

export default CreateEditPostView;
