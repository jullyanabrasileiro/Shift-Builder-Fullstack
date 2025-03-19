const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.db = router.db;

//protected routes
server.use("/api", auth);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server rodando na porta ${PORT}`);
});
