const express = require("express");

const BillsController = require("./controllers/BillsController");
const BanksController = require("./controllers/BanksController");

const routes = express.Router();

routes.post("/bill", BillsController.store);
routes.get("/bill", BillsController.show);

routes.get("/bill/:id", BillsController.index);
routes.put("/bill/:id", BillsController.update);
routes.delete("/bill/:id", BillsController.delete);

routes.put("/pagar/bill/:id", BillsController.pagar);

routes.post("/bank", BanksController.store);
routes.get("/bank", BanksController.show);

routes.get("/bank/:id", BanksController.index);
routes.put("/bank/:id", BanksController.update);
routes.delete("/bank/:id", BanksController.delete);

module.exports = routes;
