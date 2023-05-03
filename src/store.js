import { configureStore, createSlice } from "@reduxjs/toolkit";
import itemReducer from "./components/Slices/itemSlice";

// 카트 페이지.. 
let cart = createSlice({
  name: "cart",
  initialState: [
    // {id: 15, title: "아 제발", quantity: 1, price: 100},
    // {id: 55, title: "좀 나와라", quantity: 1, price: 200},
  ],
  reducers: {
      addItem(state, action) {
          let itemId = state.findIndex((item) => action.payload.id === item.id);
          itemId !== -1 ? state[itemId].quantity++ : state.push(action.payload);
      },
      changeCount(state, action){
        // todo... 카트 수량변경
      }
  },
});

const store = configureStore({
  reducer: {
    items: itemReducer,
    cart: cart.reducer,
  },
});

export let { addItem, changeCount } = cart.actions;

export default store;