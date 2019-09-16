import { GET_TEACHS, ADD_TECH, DELETE_TECH, SET_LOADING, TTECHS_ERROR } from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TEACHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};