/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/*
- should have a form to create new post or edit existing posts
- when editing, existing data should be populated in the form
*/

import React, { useSelector } from 'react';
import { Link } from 'react-router-dom';

function EditPostView(props) {
  const { id } = props.match.params;

  // store the posts from the state inside a variable
  const allPosts = useSelector((state) => Object.values(state.posts));
  const postToRender = allPosts.filter((post) => (post.id === id));
  const postTitle = postToRender.map((post) => post.title);

  return (
    <div>
      <h1>{`Edit Post ${postTitle}`}</h1>
      <form className="new-post">
        <label>
          Post Title
          <input
            name="title"
            type="text"
            placeholder="Title"
            className="text-area"
          />
        </label>
        <label>
          Username
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="text-area"
          />
        </label>
        <label>
          Category
          <select name="category">
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
            className="text-area"
          />
        </label>
        <button
          className="submit-button"
          type="submit"
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
