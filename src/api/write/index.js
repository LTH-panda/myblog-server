const express = require("express");
const checkLoggedIn = require("../../lib/checkLoggedIn");
const WriteCtrl = require("./write.ctrl");
const write = express.Router();

write.post("/", checkLoggedIn, WriteCtrl.write);
write.put("/", checkLoggedIn, WriteCtrl.update);

module.exports = write;
