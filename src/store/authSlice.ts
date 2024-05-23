import { IUser } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  user: null | IUser;
}

const initialState: InitialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null;
    }
  }
});

export const { setLoggedInUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;