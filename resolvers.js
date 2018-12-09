import authorModel from './models/author';


const resolvers = {
  Query: {
    authors: () => authorModel.find(),
    author: (root, { id }) => authorModel.findById(id)
  },

  Mutation: {
    addAuthor: (root, {name, age, books}) => {
      const author = new authorModel({ age, name, books });

      return author.save();
    }
  }
}

export default resolvers;