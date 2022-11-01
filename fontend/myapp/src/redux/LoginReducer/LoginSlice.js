import { createSlice } from '@reduxjs/toolkit'
const initialState = {}
const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    checkLogin : (state,actions)=>{}
    }
   }
)

export const {checkLogin} = LoginSlice.actions
export default LoginSlice.reducer