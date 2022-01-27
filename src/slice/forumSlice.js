import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { forumColRef } from "../index";
import {getDocs} from 'firebase/firestore'


export const asyncForum = createAsyncThunk('forum/initialize', async()=>{
    const docsForum = await getDocs(forumColRef)
    let forums = []
    docsForum.docs.forEach(doc=>{
        forums.push({...doc.data(), id: doc.id})
    })
    return forums
    
})

const userSlice = createSlice({
    name : 'forums',
    initialState: {name:'forum container', forums:[{name:'forumss'}]},
    reducers : {},
    extraReducers(builder) {
        builder.addCase(asyncForum.fulfilled, (state,action)=>{
            // state.users.push(action.payload[0])
            state.forums = action.payload
        })
        
    }
})

export default userSlice.reducer