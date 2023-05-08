import { configureStore, createSlice } from "@reduxjs/toolkit";
import itemReducer from "./components/Slices/itemSlice";

// 카트 페이지..
// const updateValue = (newVQuantity) => ({
//   type: 'UPDATE_VALUE',
//   payload: newVQuantity,
// });
// export const changeQuantityAction = (newQuantity, i) => ({
//     type: "cart/updateQuantity",
//     payload: { newQuantity, i },
// });

let cart = createSlice({
    name: "cart",
    initialState: [
        // { id: 50, title: "아 제발", quantity: 1, price: 100 },
        // { id: 11, title: "좀 나와라", quantity: 1, price: 200 },
    ],
    reducers: {
        addCart(state, action) {
            let itemId = state.findIndex((item) => action.payload.id === item.id);
            itemId !== -1 ? state[itemId].quantity++ : state.push(action.payload);
        },
        removeCart(state, action) {
            let newState = state.filter((item) => item.id !== Number(action.payload));
            return newState;
        },
        updateQuantity(state, action) {
            const { newQuantity, i } = action.payload;
            state[i].quantity = newQuantity;
        },
    },
});

let checkout = createSlice({
    name: "checkout",
    initialState: { subTotal: 0, discount: 1 },
    reducers: {
        getDiscount(state, action) {
            let newDiscount = action.payload;
            state.discount = newDiscount;
        },
        getTotalSum(state, action) {
            let newTotalSum = action.payload;
            state.subTotal = newTotalSum;
            console.log(state.subTotal);
        },
    },
});

const store = configureStore({
    reducer: {
        items: itemReducer,
        cart: cart.reducer,
        checkout: checkout.reducer,
    },
});

export let { addCart, removeCart, updateQuantity } = cart.actions;
export let { getDiscount, getTotalSum } = checkout.actions;

export default store;
