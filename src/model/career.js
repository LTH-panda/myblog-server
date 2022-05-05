const mongoose = require("mongoose");
const { Schema } = mongoose;

const CareerSchema = new Schema({
  title: String,
  desc: String,
  during: String,
});

const Career = mongoose.model("Career", CareerSchema);

module.exports = Career;
