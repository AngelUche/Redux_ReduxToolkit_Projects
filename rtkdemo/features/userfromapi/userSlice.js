
const createSlice = require('@reduxjs/toolkit').createSlice
const { createAsyncThunk } = require('@reduxjs/toolkit')
const axios = require('axios')

const UserInitialState ={
  loading: false,
  users: [],
    error:''
}

// this creates 3 major actionfunction from an api.
// USING SYNCHRONOUS ACTION
// /It craets either a pending, fulfilled or rejected action type

// const fetchUser = createAsyncThunk('user/fetchUser', ()=> {
//   return axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.data.map(user => user.name));
// })

// using async function
const fetchUser = createAsyncThunk('user/fetchUser', async ()=> {
  const response= await axios('https://jsonplaceholder.typicode.com/users')
  const data = response.data.map(user => user.name)
  return data
})
const UsersSlice = createSlice({
  name: 'user',
  initialState: UserInitialState,

  extraReducers: (builder) => {
    // this addcase accepts two arguments, the action creators and the reducer function
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    })
    // case for a suceesful fecting of data from the api
    builder.addCase(fetchUser.fulfilled, (state, action) => { 
      state.loading = false;
      state.users = action.payload;
      state.error=''
    })

    // if there was an erro fduinf the api call
    builder.addCase(fetchUser.rejected, (state, action) => { 
      state.loading = false;
      state.users = [];
      state. error= action.error.message
    })
  }
})


module.exports = UsersSlice.reducer
module.exports.fetchUser = fetchUser