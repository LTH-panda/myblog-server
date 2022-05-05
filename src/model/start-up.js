const mongoose = require("mongoose");
const { Schema } = mongoose;

const StartUpSchema = new Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
});

const StartUp = mongoose.model("StartUp", StartUpSchema);

module.exports = StartUp;
