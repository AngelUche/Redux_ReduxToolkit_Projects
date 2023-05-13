
import { ordered as cakeOrdered , restocked as CakeRestocked} from '../cake/cakeSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface initialiceCreamStateInterface{
  NumberOfIcecream: number,
  NameOfseller: string,
  Buyer:string
}
const initialiceCreamState:initialiceCreamStateInterface = {
  NumberOfIcecream: 20,
  NameOfseller: 'Emmanuel',
  Buyer: 'Uche',
};



const iceCreamSlice = createSlice({
  name: 'iceCreams',
  initialState:initialiceCreamState,
  // ?defining the action creator fpr the reducer function
  reducers: {
    boughtIcecream: (state) => {
      state.NumberOfIcecream--;
      state.Buyer = 'Not recoreded'
    },
    SoldIceCream: (state, action) => {
      state.NumberOfIcecream = state.NumberOfIcecream + action.payload;
      state.Buyer = `NAME OF SELLER: ${state.Buyer}`
    }
  },
  extraReducers: (builder) => [
    builder.addCase(cakeOrdered, (state) => {
      state.NumberOfIcecream--
    }),

    builder.addCase(CakeRestocked,(state, action:PayloadAction<number>)=> {
      state.NumberOfIcecream += action.payload
    })
  ]
  
})

export default iceCreamSlice.reducer;
export const { boughtIcecream, SoldIceCream } = iceCreamSlice.actions 