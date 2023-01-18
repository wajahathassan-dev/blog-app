import { createSlice } from "@reduxjs/toolkit";
import { posts } from '../data';

const BlogSlice = createSlice({
    name: 'blog',
    initialState: {
        allPosts: posts 
    },
    reducers: {
        addPost: (state, action) => {
            state.allPosts.push(action.payload)
        }
    }
})

export const {addPost} = BlogSlice.actions;
export default BlogSlice.reducer;