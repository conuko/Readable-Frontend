/* - should list all available categories, which should link to a category view for that category
- should list all of the posts
- should have a control for changing the sort method for the list, including at minimum,
order by voteScore and order by timestamp
- should have a control for adding a new post
*/

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Post from './Post';

function HomeView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  const allPosts = useSelector((state) => Object.values(state.posts));
  const allCategories = useSelector((state) => Object.values(state.categories));
  return (
    <div className="flex flex-col space-y-6">
      <h2 className="w-full flex-none text-2xl leading-7 mb-2 font-bold text-black bg-lime-300 text-center">Categories</h2>
      <table className="categories-table">
        <tbody className="flex-auto">
          <tr className="flex flex-row">
            {allCategories.map((category) => (
              <th className="flex-auto flex justify-center" key={category.name}>
                <Link className="w-1/2 flex items-center justify-center font-bold bg-lime-300 text-black border border-black shadow-offset-black" to={`/category/${category.name}`}>
                  <button className="p-2 text-xs sm:text-xs md:text-base uppercase font-bold" type="button">
                    {category.name}
                  </button>
                </Link>
              </th>
            ))}
          </tr>
        </tbody>
      </table>

      <h2>{`${allPosts.length} Posts`}</h2>
      <div className="flex flex-col space-y-6">
        {allPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HomeView;
