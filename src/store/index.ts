import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'
// export const store = configureStore({
//   reducer: {
//     // Define your reducers here
//     carrinho: carrinhoReducer, // Example reducer for a "carrinho" slice of state.
//     [api.reducerPath]: api.reducer
//     // (otherReducers): {...},
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware)
//   // Other store configuration goes here
// })

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
  // (other reducers): {...},
})

export function configuraStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configuraStore>
