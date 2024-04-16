/* eslint-disable jsx-a11y/anchor-is-valid */
import { DButton, DInputPin } from '@dynamic-framework/ui-react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export default function SendOTP() {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column gap-6">
      <h1 className="h4">
        {t('otp.title')}
      </h1>
      <p className="text-gray-700 mb-0">{t('otp.sent')}</p>
      <div className={classNames(
        'px-6 py-4 rounded-1',
        'bg-gray-200 border border-secondary-100',
        'align-self-start',
      )}
      >
        <span className="me-2">{t('otp.sentNumber', { number: '(+56) 930333030' })}</span>
        <a href="#" className="text-secondary">{t('otp.editNumber')}</a>
      </div>
      <DInputPin
        className="align-self-center"
        id="otp"
        characters={6}
        hint={t('otp.inputHint')}
      />
      <p className="small text-gray-700 mb-4">{t('otp.resend')}</p>
      <DButton
        text={t('actions.continue')}
        className="align-self-start"
      />
    </div>
  );
}
