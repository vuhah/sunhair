import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        authChecked: false
    },
    reducers:{
        setAuthChecked: (state, action)=>{
            state.authChecked = action.payload.authChecked
        }
        
    }
})

export const {setAuthChecked} = authSlice.actions
export default authSlice.reducer
