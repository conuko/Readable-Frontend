/* eslint-disable import/prefer-default-export */
import { getPosts } from './posts';
import { getCategories } from './categories';
import { getInitialData } from '../utils/API';

export const handleInitialData = () => (dispatch) => getInitialData()
  .then(({ categories, posts }) => {
    dispatch(getCategories(categories));
    dispatch(getPosts(posts));
  });
