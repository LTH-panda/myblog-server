const mongooes = require("mongoose");
const { Schema } = mongooes;

const LogSchema = new Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
});

const Log = mongooes.model("Log", LogSchema);

module.exports = Log;
