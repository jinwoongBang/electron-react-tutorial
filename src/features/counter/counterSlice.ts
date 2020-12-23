import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  isLoading: boolean;
  value: number;
}

const initialState: CounterState = { isLoading: false, value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
      state.isLoading = false;
    },
    incrementAsync(state) {
      state.isLoading = true;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, incrementAsync } = counterSlice.actions;
export default counterSlice.reducer;
