import * as API from '../../utils/APIs';
import {LOGIN} from '../actionTypes';

export const postLogin = (formData, navigation) => async dispatch => {
  try {
    const {data} = await API.fetchLogin(formData);
    console.log(data);
    // dispatch({type: LOGIN, payload: data});
  } catch (error) {
    console.log(error);
  }
};
