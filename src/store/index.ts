import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    // Define your reducers here
    carrinho: carrinhoReducer, // Example reducer for a "carrinho" slice of state.
    [api.reducerPath]: api.reducer
    // (otherReducers): {...},
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
  // Other store configuration goes here
})

export type RootReducer = ReturnType<typeof store.getState>
