import { graphql } from 'msw';

export const handlers = [
  graphql.query('FetchCharactersInfo', (req, res, ctx) => {
    return res(
      ctx.data({
        characters: {
          info: {
            count: 671,
            pages: 34,
          },
        },
      })
    );
  }),
  graphql.query('FetchCharacters', (req, res, ctx) => {
    return res(
      ctx.data({
        characters: {
          results: [
            {
              id: 1,
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              type: '',
              show: true,
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            },
          ],
        },
      })
    );
  }),
];
