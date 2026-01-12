import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "False",
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer: {
        login: (state, action) => {
            state.status = "True";
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = "False";
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;