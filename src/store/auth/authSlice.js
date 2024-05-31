import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: 'not-authenticated', // 'not-authenticated', 'authenticating', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action) => {
            console.log(state, action)
        },
        logout: (state, payload) => {
            console.log(state, payload)
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;