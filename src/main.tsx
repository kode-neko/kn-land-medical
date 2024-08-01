import '@assets/styles/global.less';

import { reduxStore } from '@store/index';
import React from 'react';
import ReactDOM, { Container } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './globals/routing.tsx';

ReactDOM.createRoot(document.getElementById('root') as Container).render(<React.StrictMode>
  <Provider store={reduxStore}>
    <RouterProvider router={router} />
  </Provider>
</React.StrictMode>);
