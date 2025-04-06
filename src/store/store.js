import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import blogReducer from './blogSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        blog: blogReducer,
    },
});