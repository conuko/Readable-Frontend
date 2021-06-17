/* eslint-disable no-debugger */
/*
The Posts at HomeView page.
*/

import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  const postTitle = Object.values(post.title);
  const postBody = Object.values(post.body);
  return (
    <div className="post">
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
