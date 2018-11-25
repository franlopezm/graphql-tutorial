import { gql } from 'apollo-server-express';


const typeDefs = gql`
  type Author {
    age: Int
    name: String
    Books: [String]
  }

  type Query {
    authors: [Author]
  }
`;

export default typeDefs;