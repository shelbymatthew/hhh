const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hhSchema = new Schema({
  image: { type: String, required: true },
  rest: { type: String, required: true },
  time: { type: String, required: true },
  itemsDiscounted: Array,
  url: String,
  outOfDate: Number, 
  date: { type: Date, default: Date.now }
});

const Hh = mongoose.model("Hh", hhSchema);

module.exports = Hh;