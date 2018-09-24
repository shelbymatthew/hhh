// const mongoose = require("mongoose");
// const db = require("../models");
// mongoose.Promise = global.Promise;

// // This file empties the Hhs collection and inserts the happy hours below

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/hhlist",
//   {
//     useMongoClient: true
//   }
// );

// const hhSeed = [
// { 
//     image: "https://via.placeholder.com/350x150", rest: "Rest Name", time: "Monday through Friday, 4:00pm - 7:00pm", itemsDiscounted: { item1: "Beer $4", item2: "Wells $3" } 
// },
// ];

// db.Hh
//   .remove({})
//   .then(() => db.Hh.collection.insertMany(hhSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });