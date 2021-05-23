import axios from 'axios';
import {
  getContactsSucess,
  getContactsError,
  contactsRequest,
  postContactSucess,
  postContactError,
  deleteContactSucess,
  deleteContactError,
  registrationSucess,
  registrationError,
  loginUserSucess,
  loginUserError,
  logoutSucess,
  logoutError,
} from './actions';
// import authSelectors from './redux/auth-selectors';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const takeContactsFromServer = () => async dispatch => {
  dispatch(contactsRequest());
  try {
    const { data } = await axios.get('/contacts');
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
  // const shortid = require('shortid');
  // const id = shortid.generate();
  let prevContacts;
  try {
    prevContacts = await axios.get('/contacts');
  } catch (error) {
    console.log(error.message);
  }
  let allContactNames = prevContacts.data.reduce((accum, elem) => {
    accum.push(elem.name);
    return accum;
  }, []);
  if (allContactNames.includes(name)) {
    alert(`${name} is already in contacts`);
  } else {
    dispatch(contactsRequest());
    try {
      const { data } = await axios.post('/contacts', {
        // id,
        name,
        number,
      });
      // .then(response =>

      dispatch(postContactSucess(data));
      // e.currentTarget[0].value = '';
      // e.currentTarget[1].value = '';
      // )
    } catch (error) {
      dispatch(postContactError(error));
      // );
    }
  }
};
export const deleteContactFromServer = id => async dispatch => {
  dispatch(contactsRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    // .then(response =>
    dispatch(deleteContactSucess(id));
    // )
  } catch (error) {
    dispatch(deleteContactError(error));
    // );
  }
};

export const registerAUser = e => async dispatch => {
  e.preventDefault();

  const name = e.currentTarget[0].value;
  const email = e.currentTarget[1].value;
  const password = e.currentTarget[2].value;
  // const shortid = require('shortid');
  // const id = shortid.generate();
  // dispatch(contactsRequest());
  try {
    const { data } = await axios.post(`/users/signup`, {
      // id,
      name,
      email,
      password,
    });
    token.set(data.token);
    token.unset();
    // .then(response =>
    dispatch(registrationSucess(data));
    // )
  } catch (error) {
    dispatch(registrationError(error));
    // );
  }

  try {
    const { data } = await axios.post(`/users/login`, {
      email,
      password,
    });
    token.set(data.token);
    dispatch(loginUserSucess(data));
  } catch (error) {
    dispatch(loginUserError(error));
  }
};
export const loginOperation = e => async dispatch => {
  e.preventDefault();
  const email = e.currentTarget[0].value;
  const password = e.currentTarget[1].value;

  try {
    const { data } = await axios.post(`/users/login`, {
      email,
      password,
    });
    token.set(data.token);
    dispatch(loginUserSucess(data));
  } catch (error) {
    dispatch(loginUserError(error));
  }
};
export const logout = () => async dispatch => {
  try {
    await axios.post(`/users/logout`);
    token.unset();
    // authSelectors.getIsAunticated();
    dispatch(logoutSucess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};
// export const getCurrentUser = () => async (getState, dispatch) => {
//   const { token: persistedToken } = getState();
//   if (!persistedToken) {
//     return;
//   }
//   token.set(persistedToken);
//   dispatch(getCurrentUserRequest());
//   try {
//     const response = await axios.get('/users/current');
//   } catch (error) {}
// };
