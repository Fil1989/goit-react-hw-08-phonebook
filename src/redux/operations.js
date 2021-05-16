import axios from 'axios';
import {
  getContactsSucess,
  getContactsError,
  contactsRequest,
  postContactSucess,
  postContactError,
  deleteContactSucess,
  deleteContactError,
  // postContactRequest,
} from './actions';

export const takeContactsFromServer = () => async dispatch => {
  dispatch(contactsRequest());
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
export const postContactToServer = e => async dispatch => {
  e.preventDefault();

  const name = e.currentTarget[0].value;
  const number = e.currentTarget[1].value;
  const shortid = require('shortid');
  const id = shortid.generate();
  dispatch(contactsRequest());
  try {
    const { data } = await axios.post('http://localhost:4040/contacts', {
      id,
      name,
      number,
    });
    // .then(response =>
    dispatch(postContactSucess(data));
    // )
  } catch (error) {
    dispatch(postContactError(error));
    // );
  }
};
export const deleteContactFromServer = id => async dispatch => {
  dispatch(contactsRequest());
  try {
    await axios.delete(`http://localhost:4040/contacts/${id}`);
    // .then(response =>
    dispatch(deleteContactSucess(id));
    // )
  } catch (error) {
    dispatch(deleteContactError(error));
    // );
  }
};
