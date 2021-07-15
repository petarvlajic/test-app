import { GET_NEWS, GET_SINGLENEWS, NEWS_ERROR } from '../actions/types.js';

const initialState = {
  isloading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS:
      return {
        isloading: false,
        ...payload,
      };

    case GET_SINGLENEWS:
      return {
        isloading: false,
        ...payload,
      };

    case NEWS_ERROR:
      return {
        news: 'error',
      };

    default:
      return {
        isloading: true,
      };
  }
}
