/* - should list all available categories, which should link to a category view for that category
- should list all of the posts
- should have a control for changing the sort method for the list, including at minimum,
order by voteScore and order by timestamp
- should have a control for adding a new post
*/

import React from 'react';
import { useSelector } from 'react-redux';

function HomeView() {
  const allPosts = useSelector((state) => Object.values(state.posts));
  return (
    <div>
      <h2>This is the Home View</h2>
      <ul className="dashboard-list">
        {allPosts.map((post) => (
          <li key={post.id}>
            <div>
              POST ID:
              {` ${post.id}`}
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default HomeView;
