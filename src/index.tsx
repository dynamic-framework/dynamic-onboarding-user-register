import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { DContextProvider } from '@dynamic-framework/ui-react';
import { Provider } from 'react-redux';
import store from './store/store';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';
import './styles/base.scss';

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
