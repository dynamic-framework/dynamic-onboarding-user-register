import { useDContext } from '@dynamic-framework/ui-react';
import { useEffect, useMemo } from 'react';

import CreatedMilestone from './components/CreatedMilestone';
import PrivacyPolicy from './components/documents/PrivacyPolicy';
import RegulationDynamic from './components/documents/RegulationDynamic';
import DocumentSign from './components/DocumentSign';
import LoadingMilestone from './components/LoadingMilestone';
import { CONTEXT_CONFIG, SCREENS } from './config/widgetConfig';
import { useAppSelector } from './store/hooks';
import { getView } from './store/selectors';

const VIEW_STEP = {
  [SCREENS.documentSign]: DocumentSign,
  [SCREENS.privacyPolicy]: PrivacyPolicy,
  [SCREENS.regulationDynamic]: RegulationDynamic,
  [SCREENS.loadingMilestone]: LoadingMilestone,
  [SCREENS.createdMilestone]: CreatedMilestone,
};

export default function App() {
  const { setContext } = useDContext();
  const view = useAppSelector(getView);

  const CurrentView = useMemo(
    () => VIEW_STEP[view],
    [view],
  );

  useEffect(() => {
    setContext(CONTEXT_CONFIG);
  }, [setContext]);

  return (
    <div className="d-flex flex-column align-items-center container">
      <CurrentView />
    </div>
  );
}
