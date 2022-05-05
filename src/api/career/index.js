const express = require("express");
const checkLoggedIn = require("../../lib/checkLoggedIn");
const CareerCtrl = require("./career.ctrl");
const career = express.Router();

career.get("/", CareerCtrl.getList);
career.get("/:id", CareerCtrl.getCareer);
career.post("/", checkLoggedIn, CareerCtrl.write);
career.delete("/:id", checkLoggedIn, CareerCtrl.remove);
career.put("/:id", checkLoggedIn, CareerCtrl.update);

module.exports = career;
