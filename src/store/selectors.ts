import { createDraftSafeSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getView = createDraftSafeSelector(
  getState,
  (widget) => widget.view,
);
