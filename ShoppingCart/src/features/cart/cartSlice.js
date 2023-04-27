import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
try {
  const response = await axios(url)
  return response.data
} catch (error) {
  console.log(error);
}
});

const initialState =
{
  CartItems: [],
  amount: 0,
  TotalChosenItem:  0,
  isLoading: true,
 
};
// this is the action creator, i
// t returns the inistalnstates and creat an action that modifies the state
// name:'cart' sets the name of the action funtion of which it will be called and refered
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) =>
    {
      // thisis used to ckear the CartItems to return empty array
      state.CartItems = []
      
      // or it can be set as : this is used to set the entire satte to empty array
      // return{CartItems:[]}
    },
    removeCartItem: (state, action) => {
      // this sets the state to the payload or
      //  it can be easily passed to the filter function by
      // item.id !== action.payload
      const ItemIdFromCartItems = action.payload;
      // this filters the CartItems by id and return the new, reo=moves the item that matches the
      // id and returs the newly filtered array
      state.CartItems = state.CartItems.filter(item => item.id !== ItemIdFromCartItems)
    //  console.log(state.CartItems);
    },
    increase: (state, { payload }) => {
      // searches and find the cartitems by id and returns a new payload{data } that has that id
       const newcartItem = state.CartItems.find((itemid) => itemid.id === payload.id);
      // add 1  the number of items
      newcartItem.amount += 1;
    },
    decrease: (state, {payload}) => {
       const newcartItem = state.CartItems.find((itemid) => itemid.id === payload.id);
     
      newcartItem.amount -= 1;
      
      // if (newcartItem.amount < 0)
      // {
      //   newcartItem.amount =0
      // }
    },
    calculateTotal: (state) => {
      let amount = 0;
      let TotalChosenItem = 0;
      state.CartItems.forEach(item => {
        amount += item.amount;
        TotalChosenItem += item.amount + item.price
      });
      state.TotalChosenItem = TotalChosenItem
      state.amount = amount
    }
  },
    extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.CartItems = action.payload;
      // console.log(state.CartItems);
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
  
});

// console.log(cartSlice)
// creat a state and set it the action of the entire slice
export const { clearCart,
  removeCartItem,
  increase,
  decrease,
  calculateTotal } = cartSlice.actions;

export default cartSlice.reducer