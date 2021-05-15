import fetchApi from '../fetch-api';
import { createReducer } from '@reduxjs/toolkit';
const initialState = {
  filter: '',
  contacts: [],
};
export const filter = createReducer(initialState.filter, {
  'form/handleFilterChange': (_, action) => action.payload.value,
});

export const contacts = createReducer(initialState.contacts, {
  'form/handleChange': state => state,
  'form/handleSubmit': (state, action) => {
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
    fetchApi.contact = action.payload;
    fetchApi.postContactToServer();
    return [...state, action.payload];
  },
  'form/handleDelete': (state, action) => {
    fetchApi.id = action.payload;
    fetchApi.deleteContactFromServer();

    return state.filter(el => el.id !== action.payload);
  },
  // 'Server/Request': (_, action) => action.payload,
  'Server/Sucess': (_, action) => action.payload,
  'Server/Error': (_, action) => action.payload,
});
