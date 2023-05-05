import {createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:'app',
    initialState:{
        sidebarStatus:true
    },
    //its alsways good practice to return a new state like we return a new state in setter fn otherwise we'll get unexpected behaviour 
    reducers:{
        toggleSidebar : (state)=>{
            const newState={...state}
            newState.sidebarStatus=!newState.sidebarStatus
            return newState
        },
        openSidebar:(state)=>{
            const newState={...state}
            newState.sidebarStatus=true
            return newState
            
        },
        closeSidebar:(state)=>{
            
            const newState={...state}
            newState.sidebarStatus=false
            return newState

        }
    }
})

export default appSlice.reducer
export const {toggleSidebar,closeSidebar,openSidebar}=appSlice.actions