/*
The Posts at HomeView page.
*/

import React, { useState } from 'react';
/* import { useSelector, useDispatch } from 'react-redux'; */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { handleVotePost, handleDeletePost, handleAddPost } from '../actions/posts';

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

  const handleClickOnEditButton = () => {
    dispatch(handleAddPost(post));
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
      Title:
      {' '}
      {postTitle}
      {' '}
      <br />
      Category:
      {' '}
      {post.category}
      <br />
      {' '}
      {`${post.commentCount} comments`}
      <br />
      <button className="delete-button" type="button" onClick={handleClickOnDeleteButton}>
        Delete
      </button>
      <button className="edit-button" type="button" onClick={handleClickOnEditButton}>
        Edit
      </button>
      <br />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
