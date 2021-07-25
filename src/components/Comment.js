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
    <div className="comment">
      {comment.body}
      <div>
        {comment.author}
      </div>
      <div>
        {(new Date(comment.timestamp)).toLocaleDateString()}
      </div>
      <div>
        {`Score: ${comment.voteScore}`}
      </div>
      <button type="button" onClick={handleClickOnUpVoteButton}>Upvote</button>
      <button type="button" onClick={handleClickOnDownVoteButton}>Downvote</button>
      <button type="button" onClick={handleClickOnDeleteButton}>Delete</button>

    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
