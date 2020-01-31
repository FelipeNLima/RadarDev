const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require("../src/routes");
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://felipe:felipe@cluster0-4f56k.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: request.query Filtros, ordenação, paginação, ...
//Route Params: request.params Identificar um recurso na alteração ou remoção
//Body request.body Dados para criação ou alteração de um registro
