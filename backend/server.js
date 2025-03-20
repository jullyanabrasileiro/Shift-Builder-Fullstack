// const jsonServer = require("json-server");
// const auth = require("json-server-auth");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(jsonServer.bodyParser);
// server.db = router.db;

// //protected routes
// server.use("/api", auth);
// server.use(router);

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`JSON Server rodando na porta ${PORT}`);
// });


const express = require('express');
const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.db = router.db;

server.use('/api', auth);
server.use(router);

app.get('/', (req, res) => {
  res.send('Hello, Express and JSON Server are running together! 🚀');
});

app.use('/api', server);

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
