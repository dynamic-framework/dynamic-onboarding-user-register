import { DButton } from '@dynamic-framework/ui-react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as CreatedAccount } from '../assets/createdAccount.svg';
import { IDENTITY_VALIDATION_PATH, SITE_URL, USER_NAME } from '../config/widgetConfig';

export default function CreatedMilestone() {
  const { t } = useTranslation();
  const handleContinue = useCallback(() => {
    window.location.href = `${SITE_URL}/${IDENTITY_VALIDATION_PATH}`;
  }, []);

  return (
    <div className="d-flex flex-column short-view align-items-md-center">
      <CreatedAccount className="mb-12 mb-md-10 align-self-center" />
      <h4 className="mb-6 text-center">
        {t('milestone.completeTitle', { user: USER_NAME })}
      </h4>
      <p className="text-gray-700 mb-10 text-center">
        {t('milestone.completeSubtitle')}
      </p>
      <DButton
        className="align-self-center"
        text={t('actions.continue')}
        onClick={handleContinue}
      />
    </div>
  );
}
