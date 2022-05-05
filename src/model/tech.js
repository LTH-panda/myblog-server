const mongoose = require("mongoose");
const { Schema } = mongoose;

const TechSchema = new Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
});

const Tech = mongoose.model("Tech", TechSchema);

module.exports = Tech;
