import authorModel from './models/author';


const resolvers = {
  Query: {
    authors: () => authorModel.find(),
    author: (root, { id }) => authorModel.findById(id)
  },

  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      const author = new authorModel({ age, name, books });

      return author.save();
    },
    deleteAuthor: async (root, { id }) => {
      const data = await authorModel.findOneAndDelete({ _id: id });

      return data;
    },
    updateAuthor: async (root, { id, name }) => {
      const data = await authorModel.findOneAndUpdate({ _id: id }, { name });

      return data;
    }
  }
}

export default resolvers;