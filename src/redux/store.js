import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { filter, contacts, isLoading, user, token, error } from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const middleware = [logger, ...getDefaultMiddleware()];
const rootReducer = combineReducers({
  filter,
  contacts,
  isLoading,
  user,
  token,
  error,
});

const persistConfig = {
  // key: 'token', //localStorage.set('token',...)
  storage: storage,
  // whitelist: ['token'], // token will be persisted
};

const store = configureStore({
  // reducer: persistReducer(persistConfig, rootReducer),
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

export const persistor = persistStore(store);
