import * as type from './type';

export const reducer = (state, action) => {
  switch (action.type) {
    case type.POSTS_SUCCESS: {
      console.log(action.type);
      return { ...state, posts: action.payload, loading: false };
    }
    case type.LOADING_POSTS: {
      console.log(action.type);
      return { ...state, loading: true };
    }
  }

  console.log('Não encontrei a action', action.type);
  return { ...state };
};
