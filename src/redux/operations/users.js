import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('users/getUsers', async page => {
  const url = new URL('https://643856604660f26eb19aa37e.mockapi.io/users');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 12);
  const { data } = await axios.get(url);
  return data;
});

export const updateUserById = createAsyncThunk(
  'users/updateUserById',
  async obj => {
    const { id, followers } = obj;
    const { data } = await axios.put(
      `https://643856604660f26eb19aa37e.mockapi.io/users/${id}`,
      { followers: followers }
    );
    console.log(data);
    return data;
  }
);
