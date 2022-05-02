const express = require("express");
const checkLoggedIn = require("../../lib/checkLoggedIn");
const StartUpCtrl = require("./start-up.ctrl");
const startUp = express.Router();

startUp.get("/", StartUpCtrl.getList);
startUp.get("/:id", StartUpCtrl.getPost);
startUp.delete("/:id", checkLoggedIn, StartUpCtrl.remove);

module.exports = startUp;
