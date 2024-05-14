import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getView = createSelector(
  getState,
  (widget) => widget.view,
);

export const getPrivacyDocument = createSelector(
  getState,
  (widget) => widget.privacyDocument,
);

export const getRegulationDocument = createSelector(
  getState,
  (widget) => widget.regulationDocument,
);
