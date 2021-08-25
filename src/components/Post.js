/*
The Posts at HomeView page.
*/

import React, { useState } from 'react';
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
    <div className="flex-none md:flex-1 w-full max-w-xs m-auto">
      <div className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
        <div className="text-black-700 text-md mb-2">
          <Link to={`/post/${post.id}`} className="block text-black-700 text-md font-bold mb-2">
            {postTitle}
          </Link>
          <Link to={`/category/${post.category}`} className="block text-gray-700 text-md font-bold mb-2">
            <button type="button">
              {post.category}
            </button>
          </Link>
          <p className="flex flex-row font-bold block mb-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            {' '}
            {postAuthor}
            {' '}
          </p>
          <p className="flex flex-row text-sm block mb-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {' '}
            {postDate}
          </p>
          {' '}
          <p>
            {' '}
            {' '}
            {`${post.commentCount} comments`}
          </p>
        </div>
        <div className="score-area">
          <p className="font-bold text-3xl">
            {' '}
            {postScore}
            {' '}
          </p>
          <div className="score-buttons">
            <button className="upvote-button" type="button" onClick={handleClickOnUpVoteButton}>
              Upvote
            </button>
            <button className="downvote-button" type="button" onClick={handleClickOnDownVoteButton}>
              Downvote
            </button>
          </div>
        </div>
        <div className="flex gap-6 justify-center">
          <Link to={`/post/edit/${post.id}`}>
            <button
              className="font-bold bg-lime-300 text-black uppercase text-sm border border-black shadow-offset-black hover:bg-lime-500 py-2 px-4 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Edit
            </button>
          </Link>
          <button
            className="font-bold bg-red-400 text-black uppercase text-sm border border-black shadow-offset-black hover:bg-red-600 py-2 px-4 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleClickOnDeleteButton}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
