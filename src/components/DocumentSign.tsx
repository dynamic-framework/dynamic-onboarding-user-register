import {
  DButton,
  DInputCheck,
  DQuickActionButton,
} from '@dynamic-framework/ui-react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { SCREENS, USER_NAME } from '../config/widgetConfig';
import useSignDocuments from '../hooks/useSignDocuments';
import useWidgetUtils from '../hooks/useWidgetUtils';

export default function DocumentSign() {
  const { t } = useTranslation();
  const { navigateTo } = useWidgetUtils();
  const {
    privacyPolicy,
    regulationDocument,
  } = useSignDocuments();

  return (
    <div className="short-view">
      <h4 className="mb-6">
        {t('sign.title', { user: USER_NAME })}
      </h4>
      <p className="text-gray-700 mb-10">
        {t('sign.subtitle')}
      </p>
      <DQuickActionButton
        className={classNames({
          'mb-4 document-button': true,
          'icon-success': regulationDocument,
        })}
        line1={t('sign.terms')}
        line2=""
        actionIcon={regulationDocument ? 'check-circle-fill' : 'chevron-right'}
        representativeIcon="file-earmark-text"
        onClick={() => navigateTo(SCREENS.regulationDynamic)}
      />
      <DQuickActionButton
        className={classNames({
          'mb-8 document-button': true,
          'icon-success': privacyPolicy,
        })}
        line1={t('sign.privacy')}
        line2=""
        actionIcon={privacyPolicy ? 'check-circle-fill' : 'chevron-right'}
        representativeIcon="file-earmark-text"
        onClick={() => navigateTo(SCREENS.privacyPolicy)}
      />
      <DInputCheck
        id="legal"
        type="checkbox"
        label={t('sign.checkboxLabel')}
      />
      <DButton
        className="mt-8"
        text={t('actions.continue')}
        onClick={() => navigateTo(SCREENS.loadingMilestone)}
      />
    </div>
  );
}
