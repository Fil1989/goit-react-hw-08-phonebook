import { createAction } from '@reduxjs/toolkit';
// import{}
export const handleChange = createAction('form/handleChange');
export const handleFilterChange = createAction('form/handleFilterChange', e => {
  return {
    payload: { name: e.currentTarget.name, value: e.currentTarget.value },
  };
});
export const handleDelete = createAction('form/handleDelete');

export const handleSubmit = createAction('form/handleSubmit', e => {
  e.preventDefault();
  const name = e.currentTarget[0].value;
  const number = e.currentTarget[1].value;
  const shortid = require('shortid');
  const id = shortid.generate();

  return {
    payload: { id, name, number },
  };
});
export const getContactsSucess = createAction('Server/GetSucess');
export const getContactsError = createAction('Server/GetError');
export const contactsRequest = createAction('Server/Request');
export const postContactSucess = createAction('Server/PostSucess');
export const postContactError = createAction('Server/PostError');
// export const postContactRequest = createAction('Server/PostRequest', () => {
//   return {
//     payload: { isLoading: true },
//   };
// });

export const deleteContactSucess = createAction('Server/DeleteSucess');
export const deleteContactError = createAction('Server/DeleteError');
