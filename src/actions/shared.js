import { getInitialData } from '../utils/readable-api';
import { getPosts } from './posts';

const handleInitialData = () => (dispatch) => getInitialData()
  .then(({ posts }) => {
    dispatch(getPosts(posts));
  });

export default handleInitialData();
