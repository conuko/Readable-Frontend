/*
The Posts at HomeView page.
*/

import React, { useState } from 'react';
/* import { useSelector, useDispatch } from 'react-redux'; */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { handleVotePost, handleDeletePost } from '../actions/posts';

function Post({ post }) {
  const dispatch = useDispatch();

  const [toHome, setToHome] = useState(false);

  const postScore = post.voteScore;
  const postAuthor = post.author;
  const postTitle = post.title;
  const postDate = (new Date(post.timestamp)).toLocaleDateString();

  const handleClickOnUpVoteButton = () => {
    dispatch(handleVotePost(post.id, 'upVote'));
  };

  const handleClickOnDownVoteButton = () => {
    dispatch(handleVotePost(post.id, 'downVote'));
  };

  const handleClickOnDeleteButton = () => {
    dispatch(handleDeletePost(post));
    setToHome(true);
  };

  if (toHome === true) {
    return <Redirect to="/" />;
  }
  return (
    <div className="post">
      {}
      Score:
      {' '}
      {postScore}
      {' '}
      <br />
      <button className="upvote-button" type="button" onClick={handleClickOnUpVoteButton}>
        Upvote
      </button>
      <br />
      <button className="downvote-button" type="button" onClick={handleClickOnDownVoteButton}>
        Downvote
      </button>
      <br />
      Author:
      {' '}
      {postAuthor}
      {' '}
      <br />
      Date:
      {' '}
      {postDate}
      {' '}
      <br />
      <Link to={`/post/${post.id}`}>
        {postTitle}
      </Link>
      {' '}
      <br />
      <Link to={`/category/${post.category}`}>
        <button type="button">
          {post.category}
        </button>
      </Link>
      <br />
      {' '}
      {`${post.commentCount} comments`}
      <br />
      <button className="delete-button" type="button" onClick={handleClickOnDeleteButton}>
        Delete
      </button>
      <Link to={`/post/edit/${post.id}`}>
        <button className="edit-button" type="button">
          Edit
        </button>
      </Link>
      <br />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
