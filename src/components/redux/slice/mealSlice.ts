import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
import { IOrderState } from "../type";
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;



const orderSlice = createSlice({
    name: "order",
    initialState: <IOrderState>{
        orders: [],
        place: "Dine In",
        tables: [],
        name: "",
    },
    reducers: {
        addMeal: (state, action) => {
            if (state.orders.findIndex((order) => order.id === action.payload.id) === -1) {
                state.orders = [...state.orders, 
                    { ...action.payload, 
                        order: 0
                    }];
            }
        },
        deleteOrderById: (state, action) => {
            state.orders = state.orders.map((order) => {
                if (order.id === action.payload) {
                    return { ...order, order: 0 };
                }
                return order;
            });
        },
        resetState: (state) => {
            state.orders = [];
        },
        ascendingOrder: (state, action) => {
            state.orders = state.orders.map((meal) => {
                if (meal.id === action.payload) {
                    return { ...meal, order: meal.order + 1 };
                }
                return meal;
            });
        },
        desascendingOrder: (state, action) => {
            state.orders = state.orders.map((meal) => {
                if (meal.id === action.payload) {
                    meal.order > 0 && (meal.order = meal.order - 1);
                }
                return meal;
            });
        },


        changePlace: (state, action) => {
            state.place = action.payload;
        },


        changeTable: (state, action) => {
            if (!state.tables.includes(action.payload)) {
                state.tables.push(action.payload);
            }
            else {
                state.tables = state.tables.filter((table) => table !== action.payload);
            }
        },
        resetTable: (state) => {
            state.tables = [];
        },


        changename: (state, action) => {
            state.name = action.payload
        },
        resetDefaultState: (state) => {
            state.orders = state.orders.map((order) => {
                return { ...order, order: 0 };
            });
            state.place = "Dine In";
            state.tables = [];
            state.name = "";
        }
    }
});

export default orderSlice.reducer;
export const { 
    addMeal, 
    deleteOrderById,
    resetState, 
    ascendingOrder, 
    desascendingOrder,
    changePlace,
    changeTable,
    changename,
    resetTable,
    resetDefaultState
 } = orderSlice.actions;