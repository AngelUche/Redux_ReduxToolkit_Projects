import { configureStore } from '@reduxjs/toolkit'

import '../features/cart/cartSlice'
import cartReducer from '../features/cart/cartSlice'
import ModaReducer from '../features/modal/ModalSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal:ModaReducer
  } 
})