import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./authenticate/token";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: tokenSlice,
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()