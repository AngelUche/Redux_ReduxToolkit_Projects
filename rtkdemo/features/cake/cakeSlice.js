const createSlice = require('@reduxjs/toolkit').createSlice;
// initial state of the app
const initialState = {
  numberOfCakes: 10,
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,

  // crrating the actions
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload
    },
  },
})

// exporting the reducer and the actions

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions