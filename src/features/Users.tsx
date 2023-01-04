import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../FakeData';

export const userSlice = createSlice({
  name: 'users',
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      // Write code for adding a user
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      // Write code for deleting a user
      state.value = state.value.filter((user: any) => user.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      // Write code for updating a user
      state.value = state.value.map((user: any) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
        return user;
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
