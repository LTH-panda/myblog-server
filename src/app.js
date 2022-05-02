const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const jwtMiddleware = require("./lib/jwtMiddleware");
const api = require("./api");

dotenv.config();
const app = express();
const { PORT, MONGO_URI, NODE_ENV } = process.env;

// middleware
switch (NODE_ENV) {
  case "development":
    app.use(morgan("dev"));
    break;
  case "production":
    const stream = fs.createWriteStream(__dirname + "/access.log", {
      flags: "a",
    });
    app.use(morgan("combined", { stream }));
    break;
  default:
    break;
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(jwtMiddleware);
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("mongodb successfully connected"))
  .catch((e) => console.error(e));

// routes

app.use("/api", api);

app.listen(PORT, () => console.log(`express is listening on ${PORT}`));
