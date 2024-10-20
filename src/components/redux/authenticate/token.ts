import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit'
const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>
import { TokenState } from '../type'


const tokenSlice = createSlice({
    name: "expense",
    initialState: <TokenState>{
        access_token: '',
        refresh_token: '',
    },
    reducers: {
        addAccessToken: (state, action)=> {
            state.access_token= action.payload;
        },
        addRefreshToken: (state, action)=> {
            state.refresh_token= action.payload;
        },
        resetState: (state) => {
            state.access_token='';
            state.refresh_token='';
        }
    },
})
export default tokenSlice.reducer;
export const {addAccessToken,addRefreshToken, resetState} = tokenSlice.actions