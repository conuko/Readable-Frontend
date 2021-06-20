/* eslint-disable no-debugger */
/*
The Posts at HomeView page.
*/

import React from 'react';
/* import { useSelector, useDispatch } from 'react-redux'; */
import PropTypes from 'prop-types';
/* import { handleDeletePost, handleVotePost } from '../actions/posts'; */

function Post({ post }) {
  const postScore = Object.keys(post.voteScore);
  const postAuthor = Object.values(post.author);
  const postTitle = Object.values(post.title);
  const postBody = Object.values(post.body);
  return (
    <div className="post">
      {}
      Score:
      {' '}
      {postScore}
      {' '}
      <br />
      Author:
      {' '}
      {postAuthor}
      {' '}
      <br />
      Title:
      {' '}
      {postTitle}
      {' '}
      <br />
      Body:
      {' '}
      {postBody}
      <br />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
