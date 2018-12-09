import { gql } from 'apollo-server-express';


const typeDefs = gql`
  type Author {
    id: ID
    age: Int
    name: String
    books: [String]
  }

  type Query {
    authors: [Author]
    author(id: ID): Author
  }

  type Mutation {
    addAuthor(name: String!, age: Int!, books: [String]): Author
    deleteAuthor(id: String!): Author
    updateAuthor(id: String!, name: String!): Author
  }
`;

export default typeDefs;