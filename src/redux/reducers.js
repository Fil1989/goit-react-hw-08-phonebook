// import fetchApi from '../fetch-api';
import { createReducer } from '@reduxjs/toolkit';
const initialState = {
  filter: '',
  contacts: [],
  auth: {
    user: '',
    error: false,
    token: '',
  },
};
export const filter = createReducer(initialState.filter, {
  'form/handleFilterChange': (_, action) => action.payload.value,
});

export const contacts = createReducer(initialState.contacts, {
  'form/handleChange': state => state,
  'Server/PostSucess': (state, action) => {
    if (
      state
        .reduce((accum, el) => {
          accum.push(el.name);
          return accum;
        }, [])
        .includes(action.payload.name)
    ) {
      alert(`${action.payload.name} is already in contacts`);
      return state;
    }
    // fetchApi.contact = action.payload;
    // fetchApi.postContactToServer();
    return [...state, action.payload];
  },
  'Server/PostError': (_, action) => action.payload,

  // 'form/handleDelete': (state, action) => {
  // fetchApi.id = action.payload;
  // fetchApi.deleteContactFromServer();
  'Server/DeleteSucess': (state, action) => {
    return state.filter(el => el.id !== action.payload);
  },
  'Server/DeleteError': (state, action) => {
    return action.payload;
  },
  // 'Server/Request': (_, action) => action.payload,
  'Server/GetSucess': (_, action) => action.payload,
  'Server/GetError': (_, action) => action.payload,
});
