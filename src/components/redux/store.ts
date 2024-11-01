import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./slice/mealSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: orderSlice,
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()