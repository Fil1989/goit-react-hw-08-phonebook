// import fetchApi from '../fetch-api';
import { createReducer } from '@reduxjs/toolkit';
const initialState = {
  filter: '',
  contacts: [],
  isLoading: false,
  user: {},
  error: false,
  token: '',
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
  'Server/DeleteError': (_, action) => {
    return action.payload;
  },
  'Server/GetSucess': (_, action) => action.payload,
  'Server/GetError': (_, action) => action.payload,
});

export const isLoading = createReducer(initialState.isLoading, {
  'Server/Request': (state, _) => !state,

  'Server/GetSucess': (state, _) => !state,
  'Server/GetError': (state, _) => !state,

  // 'Server/PostRequest': (_, action) => !state,
  'Server/PostSucess': (state, _) => !state,
  'Server/PostError': (state, _) => !state,

  'Server/DeleteSucess': (state, _) => !state,
  'Server/DeleteError': (state, _) => !state,
});

export const user = createReducer(initialState.user, {
  'Server/PostUserSucess': (state, action) => action.payload.user,
  'Server/PostUserError': (_, action) => action.payload,

  'Server/LoginUserSucess': (state, action) => action.payload.user,
});
export const token = createReducer(initialState.token, {
  'Server/LoginUserSucess': (state, action) => action.payload.token,
});
