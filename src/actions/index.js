import axios from 'axios';
import {
  FETCH_REPO_DATA,
  DELETE_REPO,
  FETCH_ERROR,
  RESET_ERROR,
} from './types';

export const fetchRepoData = (fullName) => async (dispatch) => {
  const url = `https://api.github.com/repos/${fullName}`;

  try {
    const response = await axios.get(url);
    dispatch({ type: RESET_ERROR });
    dispatch({
      type: FETCH_REPO_DATA,
      payload: response,
    });
  } catch (error) {
    if (error.response.status === 404) {
      dispatch({
        type: FETCH_ERROR,
        payload: 'Repo not found',
      });
    } else {
      dispatch({
        type: FETCH_ERROR,
        payload: 'Error when fetching data from GitHub',
      });
    }
  }
};

export const deleteRepo = (fullName) => (dispatch) => {
  dispatch({ type: RESET_ERROR });
  dispatch({
    type: DELETE_REPO,
    payload: fullName,
  });
};
