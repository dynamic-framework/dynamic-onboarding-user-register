import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as LoadingMilestoneLogo } from '../assets/loadingMilestone.svg';
import useWidgetUtils from '../hooks/useWidgetUtils';
import { SCREENS, USER_NAME } from '../config/widgetConfig';

export default function LoadingMilestone() {
  const { navigateTo } = useWidgetUtils();
  const { t } = useTranslation();
  useEffect(() => {
    setTimeout(() => {
      navigateTo(SCREENS.createdMilestone);
    }, 2000);
  }, [navigateTo]);

  return (
    <div className="d-flex flex-column short-view align-items-center">
      <LoadingMilestoneLogo className="mb-12 mb-md-10" />
      <h4 className="mb-6 text-center">
        {t('milestone.loadTitle')}
      </h4>
      <p className="text-gray-700 mb-10 text-center">
        {t('milestone.loadSubtitle', { user: USER_NAME })}
      </p>
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
