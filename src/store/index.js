import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { auth } from './modules/auth'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}
const reducers = combineReducers({
  auth
})
const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
  middleware: [],
  reducer: persistedReducer
})
