import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { handleVoteComment, handleDeleteComment } from '../actions/comments';

function Comment({ comment }) {
  const dispatch = useDispatch();

  const [reload, setReload] = useState(false);

  const handleClickOnUpVoteButton = () => {
    dispatch(handleVoteComment(comment.id, 'upVote'));
  };
  const handleClickOnDownVoteButton = () => {
    dispatch(handleVoteComment(comment.id, 'downVote'));
  };
  const handleClickOnDeleteButton = () => {
    dispatch(handleDeleteComment(comment.id));
    setReload(true);
  };

  if (reload === true) {
    return <Redirect to={`/post/${comment.parentId}`} />;
  }
  return (
    <div className="flex-none md:flex-1 w-full max-w-md md:max-w-5xl m-auto">
      <div className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
        <div className="text-black-700 text-md mb-2">
          <div className="mb-4 p-4 text-sm bg-gray-100">
            {comment.body}
          </div>
          <div className="flex flex-row font-bold mb-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            {comment.author}
          </div>
          <div className="flex flex-row text-sm block mb-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {(new Date(comment.timestamp)).toLocaleDateString()}
          </div>
        </div>
        <div>
          <div>
            {`Score: ${comment.voteScore}`}
          </div>
          <button type="button" onClick={handleClickOnUpVoteButton}>Upvote</button>
          <button type="button" onClick={handleClickOnDownVoteButton}>Downvote</button>
          <button type="button" onClick={handleClickOnDeleteButton}>Delete</button>
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
