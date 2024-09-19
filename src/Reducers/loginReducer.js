import { createSlice } from "@reduxjs/toolkit";


const loginReducerSlice = createSlice({
    name : "loginOperation",
    initialState : {
        data : {
            username: "",
            email: "",
            password : "",
        },
    },
    
    reducers : {
        loginUsers : (state,action)=>{
            state.data = action.payload;
        },
        logOutUsers : (state,action)=>{
            state.data = { username: "",email : "", password : ""};
        }
    }
})

export const {loginUsers, logOutUsers} = loginReducerSlice.actions;
export default loginReducerSlice.reducer;