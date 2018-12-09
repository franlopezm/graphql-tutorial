const authors = [{
  id: 1,
  name: 'JK Rowling',
  age: 50,
  books: ['Harry Potter y la piedra filosofal', 'Harry Potter y el prisionero de Azkaban']
}, {
  id: 2,
  name: 'George RR Martin',
  age: 70,
  books: ['GOT - Lucha de reyes', 'GOT - Danza de dragones']
}, {
  id: 0,
  name: 'Stephen King',
  age: 60,
  books: ['La milla verde', 'Carrie']
}];


const resolvers = {
  Query: {
    authors: () => authors,
    author: (root, { id }) => authors.find(a => a.id === id)
  }
}

export default resolvers;