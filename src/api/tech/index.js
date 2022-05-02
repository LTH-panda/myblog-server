const express = require("express");
const checkLoggedIn = require("../../lib/checkLoggedIn");
const TechCtrl = require("./tech.ctrl");
const tech = express.Router();

tech.get("/", TechCtrl.getList);
tech.get("/:id", TechCtrl.getPost);
tech.delete("/:id", checkLoggedIn, TechCtrl.remove);

module.exports = tech;
