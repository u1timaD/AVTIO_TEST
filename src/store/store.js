import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/Home/movieSlice';

export default configureStore({
  reducer: {
    movie: movieReducer,
  },
});
