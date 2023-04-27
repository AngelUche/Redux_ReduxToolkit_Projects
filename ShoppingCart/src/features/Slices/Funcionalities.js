import {cartSlice} from '../cart/cartSlice'    
function removeCartItem (state, action) {
      // this sets the state to the payload or
      //  it can be easily passed to the filter function by
      // item.id !== action.payload
      const ItemIdFromCartItems = action.payload;
      // this filters the CartItems by id and return the new, reo=moves the item that matches the
      // id and returs the newly filtered array
      state.CartItems = state.CartItems.filter(item => item.id !== ItemIdFromCartItems)
     console.log(state.CartItems);
}
    
   function increase (state, { payload }){
      // searches and find the cartitems by id and returns a new payload{data } that has that id
       const newcartItem = state.CartItems.find((itemid) => itemid.id === payload.id);
      // add 1  the number of items
      newcartItem.amount += 1;
      console.log(newcartItem);
}
    
  function decrease (state, {payload}) {
       const newcartItem = state.CartItems.find((itemid) => itemid.id === payload.id);
     
      newcartItem.amount -= 1;
      
      // if (newcartItem.amount < 0)
      // {
      //   newcartItem.amount =0
      // }
      console.log(newcartItem);
}
    
// creat a state and set it the action of the entire slice
export const { clearCart, removeCartItem, increase, decrease} = cartSlice.actions;