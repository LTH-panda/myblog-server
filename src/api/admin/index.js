const express = require("express");
const AdminCtrl = require("./admin.ctrl");
const admin = express.Router();

admin.post("/login", AdminCtrl.login);
admin.post("/logout", AdminCtrl.logout);
admin.post("/register", AdminCtrl.register);
admin.get("/check", AdminCtrl.check);

module.exports = admin;
