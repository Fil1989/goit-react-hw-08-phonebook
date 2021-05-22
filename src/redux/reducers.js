// import fetchApi from '../fetch-api';
import { createReducer } from '@reduxjs/toolkit';
const initialState = {
  filter: '',
  contacts: [],
  isLoading: false,
  user: {},
  error: '',
  token: null,
};
export const filter = createReducer(initialState.filter, {
  'form/handleFilterChange': (_, action) => action.payload.value,
});

export const contacts = createReducer(initialState.contacts, {
  'Server/PostSucess': (state, action) => {
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
  'Server/RegistrationSucess': (state, action) => action.payload.user,
  'Server/RegistrationError': (_, action) => action.payload,

  'Server/LoginUserSucess': (state, action) => {
    // <Redirect to="/contacts" />;
    return action.payload.user;
  },
  'Server/LogoutSucess': (state, action) => ({}),
});
export const token = createReducer(initialState.token, {
  'Server/RegistrationSucess': (state, action) => action.payload.token,

  'Server/LoginUserSucess': (state, action) => action.payload.token,
  'Server/LogoutSucess': (state, action) => null,
});
export const error = createReducer(initialState.error, {
  'Server/RegistrationError': (state, action) => action.payload,

  'Server/LoginUserError': (state, action) => action.payload,
  'Server/LogoutError': (state, action) => action.payload,
});
