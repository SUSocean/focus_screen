import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../features/tasks/tasksSlice';
import { pickApi } from '../api/pickApi';
import { weatherApi } from '../api/weatherApi';
export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    [pickApi.reducerPath]: pickApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([pickApi.middleware, weatherApi.middleware]),
});
