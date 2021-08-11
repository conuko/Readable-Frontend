/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/*
- should have a form to create new post or edit existing posts
- when editing, existing data should be populated in the form
*/

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { handleAddPost } from '../actions/posts';

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
    dispatch(handleAddPost(post));
    history.push('/');
  };

  return (
    <div>
      <h1>{`Edit Post "${postTitle}"`}</h1>
      <form className="edit-post" onSubmit={handleSubmit}>
        <label>
          Post Title
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
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
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            maxLength={280}
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

export default EditPostView;
