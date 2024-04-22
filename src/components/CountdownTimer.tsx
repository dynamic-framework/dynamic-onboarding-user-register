/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(90);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }, []);

  return (
    <>
      <p className="small text-gray-700 mb-4 d-none d-md-block">{t('otp.resend', { time: formatTime(seconds) })}</p>
      <a className="text-secondary mb-4 d-block d-md-none" href="#">{t('otp.mobileResend')}</a>
    </>
  );
}
