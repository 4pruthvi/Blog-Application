import {configureStore} from '@reduxjs/toolkit';
import { login, logout } from './authSlice';

const store = configureStore({
    reducer: {
        // Add your slices here
        login: login,
        logout: logout,
    }
})

export default store;