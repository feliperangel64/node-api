const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController")

routes.get("/products", ProductController.find);
routes.get("/products/:id", ProductController.findById);
routes.post("/products", ProductController.create);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.remove);

module.exports = routes;

