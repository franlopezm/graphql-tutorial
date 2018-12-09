import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';

import typeDefs from './schema';
import resolvers from './resolvers';

const PORT = 4000;
// path to run graphql server
const PATH = '/gql';
const app = express();


// connection to ddbb
mongoose.connect('mongodb://localhost:27017/graphqlTutorial', { useNewUrlParser: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connection to database was successful!');
});


// create graphql server with apollo
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: PATH });

app.listen({ port: PORT }, () => {
  console.log(`Listening on http://localhost:${PORT}${server.graphqlPath}`)
});
