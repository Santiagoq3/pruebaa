import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import modalSlice from '../features/modal/ModalSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
    modal:modalSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
