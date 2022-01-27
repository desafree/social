import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userColRef } from "../index";
import {getDocs} from 'firebase/firestore'


export const asyncUser = createAsyncThunk('users/initialize', async()=>{
    const docsUser = await getDocs(userColRef)
    let users = []
    docsUser.docs.forEach(doc=>{
        users.push(doc.data())
    })
    return users
    
})

const userSlice = createSlice({
    name : 'users',
    initialState: {users:[{}]},
    reducers : {},
    extraReducers(builder) {
        builder.addCase(asyncUser.fulfilled, (state,action)=>{
            // state.users.push(action.payload[0])
            state.users = action.payload
        })
        
    }
})

export default userSlice.reducer



