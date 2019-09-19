import { GET_TEACHS, ADD_TECH, DELETE_TECH, SET_LOADING, TTECHS_ERROR, TECHS_ERROR } from '../actions/types';

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
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TECHS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
};