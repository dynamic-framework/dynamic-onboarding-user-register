import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { SCREENS } from '../config/widgetConfig';

export type WidgetState = {
  view: string;
  privacyDocument: boolean;
  regulationDocument: boolean;
};

const initialState = {
  view: SCREENS.documentSign,
} as WidgetState;

const slice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setView(state, action: PayloadAction<string>) {
      state.view = action.payload;
    },
    setPrivacyPolicy(state, action: PayloadAction<boolean>) {
      state.privacyDocument = action.payload;
    },
    setRegulationDocument(state, action: PayloadAction<boolean>) {
      state.regulationDocument = action.payload;
    },
  },
});

export const {
  setView,
  setPrivacyPolicy,
  setRegulationDocument,
} = slice.actions;

export default slice.reducer;
