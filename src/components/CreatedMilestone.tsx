import { useTranslation } from 'react-i18next';

import { ReactComponent as CreatedAccount } from '../assets/createdAccount.svg';
import { IDENTITY_VALIDATION_PATH, SITE_URL, USER_NAME } from '../config/widgetConfig';

export default function CreatedMilestone() {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column short-view align-items-md-center">
      <CreatedAccount className="mb-12 mb-md-10 align-self-center" />
      <h4 className="mb-6 text-center">
        {t('milestone.completeTitle', { user: USER_NAME })}
      </h4>
      <p className="text-gray-700 mb-10 text-center">
        {t('milestone.completeSubtitle')}
      </p>
      <a
        href={`${SITE_URL}/${IDENTITY_VALIDATION_PATH}`}
        className="btn btn-primary align-self-center"
      >
        {t('actions.continue')}
      </a>
    </div>
  );
}
