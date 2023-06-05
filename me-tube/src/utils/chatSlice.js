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
            //after 25 messages it will delete from last 
            newState.messages.splice(25,1)


            return newState
        },
        clearMessages:(state)=>{
            const newState=JSON.parse(JSON.stringify(state))
            newState.messages=[]
            return newState
        }
    }

})

export default chatSlice.reducer
export const {addMessage,clearMessages}=chatSlice.actions