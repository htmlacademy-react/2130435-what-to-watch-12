import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthorization} from './store/User/actions/checkAuthorization/checkAuthorization.api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthorization());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
