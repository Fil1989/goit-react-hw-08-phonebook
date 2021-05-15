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
export const getContactsSucess = createAction('Server/Sucess', data => {
  return {
    payload: data,
  };
});
export const getContactsError = createAction('Server/Error', error => {
  return {
    payload: error,
  };
});
export const getContactsRequest = createAction('Server/Request', () => {
  return {
    payload: { spinner: 'Loading...', isLoading: false },
  };
});
