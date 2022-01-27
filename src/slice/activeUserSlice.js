import { createSlice } from "@reduxjs/toolkit";

const activeUserSlice = createSlice({
    name : 'active',
    initialState: {userID:'21plQoz518SZckK5V5kFBx57cpZ2'},
    reducers : {
        onlineUser(state,action) {
            console.log(action.payload.uid)
            state.userID = action.payload.uid
        }
    },

})

export default activeUserSlice.reducer
export const {onlineUser} = activeUserSlice.actions