import { createDraftSafeSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getView = createDraftSafeSelector(
  getState,
  (widget) => widget.view,
);

export const getPrivacyDocument = createDraftSafeSelector(
  getState,
  (widget) => widget.privacyDocument,
);

export const getRegulationDocument = createDraftSafeSelector(
  getState,
  (widget) => widget.regulationDocument,
);
