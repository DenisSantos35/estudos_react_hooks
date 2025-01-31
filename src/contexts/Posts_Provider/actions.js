import * as types from './type';

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.LOADING_POSTS });
  const postRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postRaw.json();
  return () => dispatch({ type: types.POSTS_SUCCESS, payload: posts });
};
