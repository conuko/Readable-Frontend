/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
/*
- should show the details of a post, including: Title, Body, Author,
timestamp (in user readable format), and vote score
- should list all of the comments for that post
- should have controls to edit or delete the post
- should have a control to add a new comment.
implement comment form however you want (inline, modal, etc.)
- comments should also have controls for editing or deleting
*/

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { handleDeletePost } from '../actions/posts';
import { handleAddComment } from '../actions/comments';

function PostDetailView(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const { id } = props.match.params;
  const allPosts = useSelector((state) => Object.values(state.posts));
  const postToRender = allPosts.filter((post) => (post.id === id));

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      body: comment,
      author: username,
    };
    dispatch(handleAddComment(data));
  };

  // TO DO: CREATE A COMMENT COMPONENT, IMPORT IT HERE AND MAP OVER THE COMMENTS!!!!

  return (
    <div>
      {postToRender.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.author}</p>
          <p>{ (new Date(post.timestamp)).toLocaleDateString() }</p>
          category:
          <Link to={`/category/${post.category}`}>
            <button type="button">
              {post.category}
            </button>
          </Link>
          <br />
          <button type="button" onClick={() => dispatch(handleDeletePost(post)) && history.push('/')}>Delete</button>
          <Link to={`/post/edit/${post.id}`}>
            <button type="button">Edit</button>
          </Link>
          <p>{`${post.commentCount} Comments`}</p>
          <form className="new-comment" onSubmit={handleSubmit}>
            <label>
              Add a comment:
              <input
                name="username"
                type="text"
                placeholder="your username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <input
                name="comment"
                type="text"
                placeholder="add a comment..."
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
            </label>
            <button
              className="submit-button"
              type="submit"
              disabled={username === '' || comment === ''}
            >
              Submit
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default PostDetailView;
