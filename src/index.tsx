import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import App from './App';

const GRAPHCMS_API =
  'https://api-ap-northeast-1.graphcms.com/v2/ckbc80agu025201yucoh09m9d/master';

const client: any = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    {/* <ApolloHooksProvider client={client}> */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    {/* </ApolloHooksProvider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
