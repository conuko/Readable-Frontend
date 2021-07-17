/* eslint-disable react/destructuring-assignment */
/* - identical to the default view, but filtered to only include posts with the selected category
*/

import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';

function CategoryView(props) {
  const { category } = props.match.params;

  const allPosts = useSelector((state) => Object.values(state.posts));

  let postsToRender = [];
  postsToRender = allPosts.filter((post) => post.category === category);

  return (
    <div>
      <h2>{ category }</h2>
      <h2>{`${postsToRender.length} Posts`}</h2>
      <ul className="posts-list">
        {postsToRender.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryView;
