import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postsColRef } from "../index";
import {getDocs} from 'firebase/firestore'


export const asyncPosts = createAsyncThunk('posts/initialize', async()=>{
    const docsPosts = await getDocs(postsColRef)
    let posts = []
    docsPosts.docs.forEach(doc=>{
        posts.push({...doc.data(), id: doc.id})
    })
    return posts
    
})

const postsSlice = createSlice({
    name : 'posts',
    initialState: {name:'post container', posts:[{upvote:0}]},
    reducers : {},
    extraReducers(builder) {
        builder.addCase(asyncPosts.fulfilled, (state,action)=>{
            // state.posts.push(action.payload[0])
            state.posts = action.payload
        })
        
    }
})

export default postsSlice.reducer