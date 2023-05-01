import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../features/tasks/tasksSlice';
import { pickApi } from '../api/pickApi';
export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    [pickApi.reducerPath]: pickApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pickApi.middleware),
});
