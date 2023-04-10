import { gql } from '@apollo/client';
import client from './client';

const fetchCharacters = (randomPage: number) => {
  return client.query({
    query: gql`query FetchCharacters {
        characters(page: ${randomPage}) {
            results {
                id
                name
                status
                species
                type
                image
                show @client
            }
        }
    }
    `,
  });
};

export default fetchCharacters;
