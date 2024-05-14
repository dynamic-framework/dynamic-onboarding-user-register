import { DContextProvider } from '@dynamic-framework/ui-react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';
import store from './store/store';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('@dynamic-framework/ui-react/dist/css/dynamic-ui.css');
}
require('./styles/base.scss');

const root = ReactDOM.createRoot(document.getElementById('userRegister') as Element);
root.render(
  <StrictMode>
    <Provider store={store}>
      <DContextProvider>
        <App />
      </DContextProvider>
    </Provider>
  </StrictMode>,
);
