import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlogs: (state, action) => {
        state.blogs = action.payload;
    },
    removeBlogs: (state) => {
        state.blogs = [];
    },
  },
})

export const { addBlogs, removeBlogs } = blogSlice.actions

export default blogSlice.reducer;
