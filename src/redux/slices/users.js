import { createSlice } from '@reduxjs/toolkit';
import { getUsers, updateUserById } from 'redux/operations/users';

const pendingHandlerAuth = state => {
  state.data = null;
  state.status = 'loading';
};

const rejectedHandler = (state, action) => {
  state.data = null;
  state.status = 'error';
};

const initialState = {
  data: [],
  isFollowUsers: [],
  status: 'loading',
  filter: 'all',
};

const stateUpdate = (state, action) => {
  for (var i = 0; i < state.data.length; i++) {
    if (state.data[i].id !== action.payload.id) continue;

    state.data[i] = action.payload;
    return state.data;
  }
};
const usersSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    followUser(state, action) {
      state.isFollowUsers.push(action.payload);
    },
    deleteFollow(state, action) {
      state.isFollowUsers = state.isFollowUsers.filter(
        el => el !== action.payload
      );
    },
    filterUser(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUsers.pending, pendingHandlerAuth);
    builder.addCase(getUsers.rejected, rejectedHandler);
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    });
    builder.addCase(updateUserById.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(updateUserById.rejected, rejectedHandler);
    builder.addCase(updateUserById.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = stateUpdate(state, action);
    });
  },
});

export const { followUser, deleteFollow, filterUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
