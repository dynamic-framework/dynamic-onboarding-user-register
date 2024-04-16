import { useDContext } from '@dynamic-framework/ui-react';
import { useEffect, useMemo } from 'react';
import { CONTEXT_CONFIG, SCREENS } from './config/widgetConfig';
import { useAppSelector } from './store/hooks';
import { getView } from './store/selectors';
import SendOTP from './components/SendOTP';

const VIEW_STEP = {
  [SCREENS.sendOtp]: SendOTP,
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
    <div className="container d-flex flex-column container align-items-center">
      <CurrentView />
    </div>
  );
}
