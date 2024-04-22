import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getPrivacyDocument, getRegulationDocument } from '../store/selectors';
import { setPrivacyPolicy, setRegulationDocument } from '../store/slice';

export default function useSignDocuments() {
  const dispatch = useAppDispatch();
  const privacyPolicy = useAppSelector(getPrivacyDocument);
  const regulationDocument = useAppSelector(getRegulationDocument);

  const signDocument = useCallback((document: 'privacy' | 'regulation') => {
    if (document === 'privacy') {
      dispatch(setPrivacyPolicy(true));
    } else {
      dispatch(setRegulationDocument(true));
    }
  }, [dispatch]);

  return {
    signDocument,
    privacyPolicy,
    regulationDocument,
  };
}
