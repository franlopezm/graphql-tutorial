import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const PORT = 4000;
// path to run graphql server
const PATH = '/gql';
const app = express();

const typeDefs = gql`
  type Query {
    announcement: String
  }
`

const resolvers = {
  Query: {
    announcement: () => {
      'Hello....'
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: PATH });

app.listen({ port: PORT }, () => {
  console.log(`Listening on http://localhost:${PORT}${server.graphqlPath}`)
});
