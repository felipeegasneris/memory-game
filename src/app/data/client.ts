import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
    fetch,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Character: {
        fields: {
          show: {
            read() {
              return true;
            },
          },
        },
      },
    },
  }),
});
export default client;
