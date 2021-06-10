import { getPosts } from './posts';
import { getCategories } from './categories';
import { fetchPosts, fetchCategories } from '../utils/API';

const handleInitialData = () => (dispatch) => Promise.all([fetchCategories(), fetchPosts()])
  .then(({ categories, posts }) => {
    dispatch(getCategories(categories));
    dispatch(getPosts(posts));
  });

export default handleInitialData();
