/* eslint-disable jsx-a11y/anchor-is-valid */
import { DButton, DInputPin } from '@dynamic-framework/ui-react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import useWidgetUtils from '../hooks/useWidgetUtils';
import { SCREENS } from '../config/widgetConfig';
import CountdownTimer from './CountdownTimer';

export default function SendOTP() {
  const { t } = useTranslation();
  const { navigateTo } = useWidgetUtils();

  return (
    <div className="d-flex flex-column gap-2 gap-md-6">
      <h1 className="h4 d-none d-md-block">
        {t('otp.title')}
      </h1>
      <h1 className="h4 d-block d-md-none">
        {t('otp.mobileTitle')}
      </h1>
      <p className="text-gray-700 mb-0 d-none d-md-block">{t('otp.sent')}</p>
      <p className="text-gray-700 mb-6 mb-md-0 d-block d-md-none">{t('otp.mobileSent')}</p>
      <div className="d-flex flex-column gap-8 gap-md-6 align-self-center align-self-md-stretch">
        <div className={classNames(
          'px-6 py-4 rounded-1',
          'bg-gray-200 border border-secondary-100',
          'align-self-center align-self-md-start',
        )}
        >
          <span className="me-2 d-none d-md-inline-block">{t('otp.sentNumber', { number: '(+56) 930333030' })}</span>
          <span className="me-2 d-inline-block d-md-none">(+56) 930333030</span>
          <a href="#" className="text-secondary d-none d-md-inline-block">{t('otp.editNumber')}</a>
          <a href="#" className="text-secondary d-inline-block d-md-none">{t('otp.mobileEditNumber')}</a>
        </div>
        <DInputPin
          className="otp-input align-self-start"
          id="otp"
          characters={6}
          hint={t('otp.inputHint')}
        />
        <CountdownTimer />
      </div>
      <DButton
        text={t('actions.continue')}
        className="align-self-start"
        onClick={() => { navigateTo(SCREENS.documentSign); }}
      />
    </div>
  );
}
