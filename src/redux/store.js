import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './manage';

export default configureStore({
    reducer: {
    blog: blogSlice
}})