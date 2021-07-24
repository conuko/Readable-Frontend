/* eslint-disable jsx-a11y/label-has-associated-control */

/*
- should have a form to create new post or edit existing posts
- when editing, existing data should be populated in the form
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateEditPostView() {
  const [postTitle, setPostTitle] = useState('');
  const [username, setUsername] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1>Add a new Post</h1>
      <form className="new-post">
        <label>
          Post Title
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
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
            onChange={(e) => setUsername(e.target.value)}
            className="text-area"
          />
        </label>
        <label>
          Category
          <input
            name="category"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-area"
          />
        </label>
        <label>
          Message
          <input
            name="message"
            type="text"
            placeholder="Your Text"
            maxLength={280}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
