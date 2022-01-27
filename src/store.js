import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice'
import postsReducer from './slice/postsSlice'
import forumSlice from "./slice/forumSlice";
import activeUserSlice from "./slice/activeUserSlice";

export default configureStore({
    reducer:{
        users: userReducer,
        posts: postsReducer,
        forums : forumSlice,
        active : activeUserSlice
    }
})