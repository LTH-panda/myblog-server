const express = require("express");
const write = require("./write");
const tech = require("./tech");
const startUp = require("./start-up");
const log = require("./log");
const admin = require("./admin");
const career = require("./career");

const api = express.Router();

api.use("/write", write);
api.use("/tech", tech);
api.use("/start-up", startUp);
api.use("/log", log);
api.use("/admin", admin);
api.use("/career", career);

module.exports = api;
