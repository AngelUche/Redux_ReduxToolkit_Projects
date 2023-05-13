const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;


const initialiceCreamState = {
  NumberOfIcecream: 20,
  NameOfseller: 'Emmanuel',
  Buyer:'Uche'
};


const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState:initialiceCreamState,
  // ?defining the action creator fpr the reducer function
  reducers: {
    boughtIcecream: (state) => {
      state.NumberOfIcecream--;
      state.Buyer = 'Not recoreded'
    },
    SoldIceCream: (state, action) => {
      state.NumberOfIcecream += action.payload;
      state.Buyer = `NAME OF SELLER: ${state.Buyer}`
    }
  },
  extraReducers: (builder) => [
    builder.addCase(cakeActions.ordered, (state) => {
      state.Buyer='what is your problem'
    })
  ]
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions 