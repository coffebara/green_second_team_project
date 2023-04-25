import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuItems: [
    { id: 1, label: 'Menu 1', children: [{ id: 2, label: 'Child Menu 1' }] },
    { id: 3, label: 'Menu 2' },
    { id: 4, label: 'Menu 3' },
  ],
  activeMenuItem: null,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActiveMenuItem: (state, action) => {
      state.activeMenuItem = action.payload;
    },
  },
});

export const { setActiveMenuItem } = menuSlice.actions;

export const selectMenuItems = (state) => state.menu.menuItems;
export const selectActiveMenuItem = (state) => state.menu.activeMenuItem;

export default menuSlice.reducer;