import {configureStore } from '@reduxjs/toolkit'
import LoginReducer from './LoginReducer/LoginSlice'

export default configureStore({
    reducer:{
        LoginReducer:LoginReducer
    }
})