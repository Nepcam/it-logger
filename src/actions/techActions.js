import { GET_TEACHS, ADD_TECH, DELETE_TECH, SET_LOADING, TTECHS_ERROR } from './types';

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHs,
      payload: data
    });
    
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};


// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};