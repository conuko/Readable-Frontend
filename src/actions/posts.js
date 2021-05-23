export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_POST = 'VOTE_POST';
export const EDIT_POST = 'EDIT_POST';
export const INCREMENT_COMMENT_COUNTER = 'INCREMENT_COMMENT_COUNTER';

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function handleAddPost() {

}

function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts,
  };
}

function deletePost({ post, id }) {
  return {
    type: DELETE_POST,
    post,
    id,
  };
}

export function handleDeletePost() {

}

function votePost({ post, id, option }) {
  return {
    type: VOTE_POST,
    post,
    id,
    option,
  };
}

export function handleVotePost() {

}

function editPost({ posts, id, post }) {
    return {
        type: EDIT_POST,
        posts,
        id,
        post,
    }
}

export function handleEditPost() {

}

function incrementCommentCounter({ post, id, count }) {
    return {
        type: INCREMENT_COMMENT_COUNTER,
        post,
        id,
        count
    }
}

export function handleIncrementCommentCounter() {

}
