/* - should list all available categories, which should link to a category view for that category
- should list all of the posts
- should have a control for changing the sort method for the list, including at minimum,
order by voteScore and order by timestamp
- should have a control for adding a new post
*/

import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';

function HomeView() {
  const allPosts = useSelector((state) => Object.values(state.posts));
  const allCategories = useSelector((state) => Object.values(state.categories));
  return (
    <div>
      <h1>Home View</h1>
      <h2>Categories</h2>
      <div className="categories-container">
        <ul className="categories-list">
          {allCategories.map((category) => (
            <li key={category.name}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      <h2>{`${allPosts.length} Posts`}</h2>
      <ul className="posts-list">
        {allPosts.map((post) => (
          <li key={post.id}>
            <Post id={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeView;
