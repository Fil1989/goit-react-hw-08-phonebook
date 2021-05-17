import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { filter, contacts, isLoading, user, token, error } from './reducers';
const middleware = [logger, ...getDefaultMiddleware()];
const rootReducer = combineReducers({
  filter,
  contacts,
  isLoading,
  user,
  token,
  error,
});
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
