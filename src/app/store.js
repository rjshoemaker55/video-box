import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../app/slices/contentSlice';

export default configureStore({
  reducer: {
    content: contentReducer,
  },
});
