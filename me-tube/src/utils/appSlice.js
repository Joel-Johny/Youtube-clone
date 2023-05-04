import {createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:'app',
    initialState:{
        sidebarStatus:true
    },
    reducers:{
        toggleSidebar : (state)=>{
            state.sidebarStatus=!state.sidebarStatus
        },
        openSidebar:(state)=>{
            state.sidebarStatus=true
        },
        closeSidebar:(state)=>{
            state.sidebarStatus=false
        }
    }
})

export default appSlice.reducer
export const {toggleSidebar,closeSidebar,openSidebar}=appSlice.actions