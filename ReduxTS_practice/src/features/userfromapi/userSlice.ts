import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type UsersFromApiType = {
  name: string,
  id:number
}

// TYPE OF DATA GOTTEN FROM TE API
type usersType = {
  name: string;
  id: number;
}

// TYPE FOR THE INITIAL STATE
interface UserInitialStatInterface{
  loading: boolean,
  users: usersType[],
  error:string;
  
}
const UserInitialState:UserInitialStatInterface={
  loading: false,
  users: [],
  error:''
}

// this creates 3 major actionfunction from an api.
// USING SYNCHRONOUS ACTION
// /It craets either a pending, fulfilled or rejected action type

// export const fetchUser = createAsyncThunk('user/fetchUser', ()=> {
//   return axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.data);
// })


// using async function
export const fetchUser = createAsyncThunk('user/fetchUser', async ()=> {
  const response= await axios('https://jsonplaceholder.typicode.com/users')
  const data = response.data
  return data
})
const UsersSlice = createSlice({
  name: 'user',
  initialState: UserInitialState,
  reducers: {},

  extraReducers: (builder) => {
    // this addcase accepts two arguments, the action creators and the reducer function
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    })
    // case for a suceesful fecting of data from the api
    builder.addCase(fetchUser.fulfilled, (state, action:PayloadAction<usersType[]>) => { 
      state.loading = false;
      state.users = action.payload;
      state.error=''
    })

    // if there was an erro fduinf the api call
    builder.addCase(fetchUser.rejected, (state, action) => { 
      state.loading = false;
      state.users = [];
      state. error= action.error.message || 'error mising'
    })
  }
})

export default UsersSlice.reducer