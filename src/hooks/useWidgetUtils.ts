import { useCallback } from 'react';
import { useAppDispatch } from '../store/hooks';
import {
  setView,
} from '../store/slice';

export default function useWidgetUtils() {
  const dispatch = useAppDispatch();

  const navigateTo = useCallback((screen: string) => {
    dispatch(setView(screen));
  }, [dispatch]);

  return {
    navigateTo,
  };
}
