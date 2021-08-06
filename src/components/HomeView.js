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
    <div className="flex flex-col">
      <h1 className="w-full flex-none text-2xl leading-7 mb-2 font-bold text-lemon bg-black text-center">Home View</h1>
      <h2 className="w-full flex-none text-2xl leading-7 mb-2 font-bold text-black bg-lemon text-center">Categories</h2>
      <div className="flex flex-col">
        <table className="categories-table">
          <tbody>
            <tr>
              {allCategories.map((category) => (
                <th key={category.name}>
                  <Link to={`/category/${category.name}`}>
                    <button className="category-button" type="button">
                      {category.name}
                    </button>
                  </Link>
                </th>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>{`${allPosts.length} Posts`}</h2>
      <div className="flex flex-col">
        {allPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HomeView;
