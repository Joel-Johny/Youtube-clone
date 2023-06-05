import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            const newState=JSON.parse(JSON.stringify(state))
            newState.messages.unshift(action.payload)
            newState.messages.slice(25,1)

            return newState
        }
    }

})

export default chatSlice.reducer
export const {addMessage}=chatSlice.actions