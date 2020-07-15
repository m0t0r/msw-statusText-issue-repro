import { rest } from 'msw';

const HOSTNAME = 'http://localhost:3000';

export const handlers = [
  rest.get(`http://localhost:1234/hello`, (req, res, ctx) => {
    return res(
      ctx.json({
        hello: 'world',
      }),
    );
  }),

  rest.get(`http://localhost:1234/error`, (req, res, ctx) => {
    return res(ctx.status(403), ctx.json({ message: 'Something went wrong' }));
  }),
];
