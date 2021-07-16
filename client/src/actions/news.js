import { GET_NEWS, GET_SINGLENEWS, NEWS_ERROR } from './types';
import axios from 'axios';

// Get All News

export const getNews = () => async (dispatch) => {
  try {
    const res = await axios.get('/news/getNews');
    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NEWS_ERROR,
    });
  }
};

// Get Single News

export const getSingleNews = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/news/getsnews/${id}`);

    dispatch({
      type: GET_SINGLENEWS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NEWS_ERROR,
    });
  }
};
