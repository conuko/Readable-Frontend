/* - should list all available categories, which should link to a category view for that category
- should list all of the posts
- should have a control for changing the sort method for the list, including at minimum,
order by voteScore and order by timestamp
- should have a control for adding a new post
*/

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Post from './Post';

function HomeView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  const allPosts = useSelector((state) => Object.values(state.posts));
  /*   const allCategories = useSelector((state) => Object.values(state.categories)); */
  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-2xl leading-7 mb-2 mt-10 uppercase font-bold text-black text-center">{`${allPosts.length} Posts`}</h2>
      <div className="flex flex-col space-y-6">
        {allPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HomeView;
