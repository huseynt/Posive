import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

export interface NotificationState {
    all: { text: string; description: string }[];
    new: { text: string; description: string }[];
}

const notificationSlice = createSlice({
    name: "notifications",
    initialState: <NotificationState>{
        all: [],
        new: [],
    },
    reducers: {
        addNotificationCount: (state, action) => {
            const newNotifications = action.payload.filter(
                (notification: { text: string; description: string }) =>
                    !state.all.some(
                        (existing) => existing.description === notification.description
                    )
            );
            state.new = [...state.new, ...newNotifications].slice(-5);
            state.all = [...state.all, ...newNotifications];
        },
        reset: (state) => {
            state.all = [];
            state.new = [];
        },
        changeNewToAll: (state) => {
            const newNotifications = state.new.filter(
                (notification: { text: string; description: string }) =>
                    !state.all.some(
                        (existing) => existing.description === notification.description
                    )
            );
            state.all = [...state.all, ...newNotifications];
            state.new = [];
        }
    },
});

export const { addNotificationCount, reset, changeNewToAll } = notificationSlice.actions;
export default notificationSlice.reducer;

