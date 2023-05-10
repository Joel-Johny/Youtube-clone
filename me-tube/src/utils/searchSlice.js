import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"searchCache",
    initialState:{},
    reducers:{
        addToCache:(state,action)=>{
            const newState={...state,...action.payload}
            return newState
        }
    }
})

export default searchSlice.reducer
export const {addToCache} = searchSlice.actions