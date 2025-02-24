import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addDiaryEntry = createAsyncThunk(
  'diary/addDiaryEntry',
  async ({ owner, date, product, weight }, thunkAPI) => {
    try {
      const response = await axios.post('/diary', { owner, date, product, weight });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteDiaryEntry = createAsyncThunk('diary/deleteDiaryEntry', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/diary/${id}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const getDailyDiary = createAsyncThunk('diary/getDailyDiary', async (date, thunkAPI) => {
  try {
    const dateQuery = URLSearchParams.toString(date);
    const response = await axios.get(`/diary/daily?${dateQuery}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
