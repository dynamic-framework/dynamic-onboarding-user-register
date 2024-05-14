import type { ComponentProps } from 'react';
import type { DContextProvider } from '@dynamic-framework/ui-react';

import liquidParser from '../utils/liquidParser';

export const SITE_LANG = liquidParser.parse('{{site.language}}');
export const USER_NAME = liquidParser.parse('{{user.first_name}}');

export const VARS_CURRENCY = {
  symbol: liquidParser.parse('{{vars.currency-symbol}}'),
  precision: Number(liquidParser.parse('{{vars.currency-precision}}')),
  separator: liquidParser.parse('{{vars.currency-separator}}'),
  decimal: liquidParser.parse('{{vars.currency-decimal}}'),
};

export const SITE_URL = liquidParser.parse('{{site.url}}');
export const IDENTITY_VALIDATION_PATH = liquidParser.parse('{{vars.identity-validation-path}}');

export const CONTEXT_CONFIG = {
  language: SITE_LANG,
  currency: VARS_CURRENCY,
} satisfies Partial<ComponentProps<typeof DContextProvider>>;

export const SCREENS = {
  privacyPolicy: 'privacy',
  regulationDynamic: 'regulation',
  documentSign: 'sign',
  loadingMilestone: 'loadingMilestone',
  createdMilestone: 'createdMilestone',
};
