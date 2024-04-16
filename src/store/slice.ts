import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { SCREENS } from '../config/widgetConfig';

export type WidgetState = {
  view: string;
};

const initialState = {
  view: SCREENS.sendOtp,
} as WidgetState;

const slice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setView(state, action: PayloadAction<string>) {
      state.view = action.payload;
    },
  },
});

export const {
  setView,
} = slice.actions;

export default slice.reducer;
