import express from 'express';
const server = express();

/* server.get('/graphql', (req, res) => {
  res.send('Graphql endpoint')
}); */

server.listen(4000, () => {
  console.log('Listening on port 4000')
});
