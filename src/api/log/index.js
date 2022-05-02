const express = require("express");
const checkLoggedIn = require("../../lib/checkLoggedIn");
const LogCtrl = require("./log.ctrl");
const log = express.Router();

log.get("/", LogCtrl.getList);
log.delete("/", LogCtrl.remove);

module.exports = log;
