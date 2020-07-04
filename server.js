const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

//Iniciando o app
const app = express();

//Permite receber dados json
app.use(express.json())

//Permite acessos de aplicações externas
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

//Iniciando os Models
requireDir("./src/models/");

//Rotas
app.use("/api", require("./src/routes"));

//Listener
app.listen("3001");