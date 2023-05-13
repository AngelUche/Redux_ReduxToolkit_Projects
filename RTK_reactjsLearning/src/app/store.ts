import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/iceCreamSlice'
import userReduder from '../features/userfromapi/userSlice'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// importing the logger

 const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceCreamReducer,
    users: userReduder
  },
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
 })
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

export default store; 