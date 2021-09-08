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
    <div className="flex-none md:flex-1 w-full max-w-md md:max-w-5xl m-auto">
      <div className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
        <div className="text-black-700 text-md mb-2">
          <Link to={`/post/${post.id}`} className="block text-black-700 text-md md:text-xl font-bold mb-2 hover:text-gray-500">
            {postTitle}
          </Link>
          <Link to={`/category/${post.category}`} className="block text-black-700 text-sm font-bold mb-2">
            <button type="button" className="bg-gray-200 hover:bg-gray-300 p-1">
              {post.category}
            </button>
          </Link>
          <p className="flex flex-row font-bold block mb-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            {postAuthor}
          </p>
          <p className="flex flex-row text-sm block mb-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {postDate}
          </p>
          <p>
            {`${post.commentCount} comments`}
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start mb-4 mt-4">
          <p className={postScore >= 0 ? 'font-bold text-5xl text-lime-500' : 'font-bold text-5xl text-red-500'}>
            {postScore}
          </p>
          <div className="score-buttons">
            <button className="upvote-button" type="button" onClick={handleClickOnUpVoteButton}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-lime-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </button>
            <button className="downvote-button" type="button" onClick={handleClickOnDownVoteButton}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-6 justify-center md:justify-start">
          <Link to={`/post/edit/${post.id}`}>
            <button
              className="font-bold bg-lime-300 text-black uppercase text-sm border border-black shadow-offset-black hover:bg-lime-500 py-2 px-4 focus:outline-none focus:shadow-outline active:shadow-none"
              type="button"
            >
              Edit
            </button>
          </Link>
          <button
            className="font-bold bg-red-400 text-black uppercase text-sm border border-black shadow-offset-black hover:bg-red-600 py-2 px-4 focus:outline-none focus:shadow-outline active:shadow-none"
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
