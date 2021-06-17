/*
The Posts at HomeView page.
*/

import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Post({ id }) {
  const posts = useSelector((state) => Object.values(state.posts));
  const post = posts[id];
  return (
    <div className="post" />
  );
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Post;
