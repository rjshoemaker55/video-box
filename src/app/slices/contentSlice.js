import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    component: '',
    data: {},
  },
  reducers: {
    setPageContent: (component, data) => {
      state.component = component;
      state.data = data;
    },
  },
});

export const { setPageContent } = contentSlice.actions;
export const getPageContent = (state) => state;

export default contentSlice.reducer;
