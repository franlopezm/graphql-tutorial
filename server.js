import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';

const PORT = 4000;
// path to run graphql server
const PATH = '/gql';
const app = express();

/* const resolvers = {
  Query: {
    authors: () => authors
  }
} */

const server = new ApolloServer({ typeDefs, /* resolvers */ });
server.applyMiddleware({ app, path: PATH });

app.listen({ port: PORT }, () => {
  console.log(`Listening on http://localhost:${PORT}${server.graphqlPath}`)
});
