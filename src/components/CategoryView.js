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
    <div className="flex flex-col space-y-6">
      <h2 className="text-2xl leading-7 mb-2 font-bold text-black text-center">{ category }</h2>
      <h2 className="text-2xl leading-7 mb-2 font-bold text-black text-center">{`${postsToRender.length} ${postsToRender.length === 1 ? 'Post' : 'Posts'}`}</h2>
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
