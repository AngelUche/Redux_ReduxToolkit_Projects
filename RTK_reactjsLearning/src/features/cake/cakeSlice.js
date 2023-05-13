import {createSlice} from '@reduxjs/toolkit'
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

export const { ordered, restocked} = cakeSlice.actions
export default cakeSlice.reducer