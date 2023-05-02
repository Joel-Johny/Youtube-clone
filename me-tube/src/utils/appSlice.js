import {createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:'app',
    initialState:{
        sidebarStatus:true
    },
    reducers:{
        toggleSidebar : (state)=>{
            state.sidebarStatus=!state.sidebarStatus
        }
    }
})

export default appSlice.reducer
export const {toggleSidebar}=appSlice.actions