import { combineReducers } from '@reduxjs/toolkit';
import orderSlice from "./slice/mealSlice";
import notificationSlice from "./slice/notificationSlice";

const rootReducer = combineReducers({
    order: orderSlice,
    notifications: notificationSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;