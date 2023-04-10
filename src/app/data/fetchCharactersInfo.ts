import { gql } from '@apollo/client';
import client from './client';

const fetchCharactersInfo = () => {
  return client.query({
    query: gql`
      query FetchCharactersInfo {
        characters {
          info {
            count
            pages
          }
        }
      }
    `,
  });
};

export default fetchCharactersInfo;
