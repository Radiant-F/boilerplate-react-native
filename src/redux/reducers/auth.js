import {AUTH_TYPE, LOGIN} from '../actionTypes';

export default (state = {data: null, auth_type: 'login'}, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, data: action.payload};
    case AUTH_TYPE:
      return {...state, auth_type: action.payload};
    default:
      return state;
  }
};
