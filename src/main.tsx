import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import Layout from './app/components/Layout/Layout';
import client from './app/data';
import { ApolloProvider } from '@apollo/client';
import { GlobalStateProvider } from './app/context';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Layout>
      <GlobalStateProvider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </GlobalStateProvider>
    </Layout>
  </StrictMode>
);
