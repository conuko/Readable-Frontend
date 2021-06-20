/* eslint-disable no-debugger */
/*
The Posts at HomeView page.
*/

import React from 'react';
/* import { useSelector, useDispatch } from 'react-redux'; */
import PropTypes from 'prop-types';
import { handleVotePost } from '../actions/posts';

function Post({ post }) {
  const postScore = post.voteScore;
  const postAuthor = post.author;
  const postTitle = post.title;
  const postDate = (new Date(post.timestamp)).toLocaleDateString();

  const handleClickOnUpVoteButton = () => {
    handleVotePost(post.id, post.voteScore + 1);
  };

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
      <button className="downvote-button" type="button">
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
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
