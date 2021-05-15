import axios from 'axios';
import {
  getContactsSucess,
  getContactsError,
  getContactsRequest,
} from './actions';

export const takeContactsFromServer = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const { data } = await axios.get('http://localhost:4040/contacts');
    // .then(response =>
    dispatch(getContactsSucess(data));
    // )
  } catch (error) {
    dispatch(getContactsError(error));
    // );
  }
};
