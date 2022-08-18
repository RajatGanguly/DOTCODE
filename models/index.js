const mongoose = require("mongoose");
mongoose.set("debug", true);
const MONGODB_URI =
  "mongodb+srv://dotcode:bQr1Anhs1BTSp0Nt@cluster0.imiztnw.mongodb.net/dotcode?retryWrites=true&w=majority";
// const MONGODB_DB = "Dotcode";

const mongoParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
};

mongoose.connect(
  "mongodb+srv://dotcode:bQr1Anhs1BTSp0Nt@cluster0.imiztnw.mongodb.net/dotcode?retryWrites=true&w=majority",
  () => {
    console.log("Connected to MongoDB");
  },
  (e) => {
    console.error("Failed to connect to MongoDB  ", e);
  }
);

mongoose.Promise = Promise;

// module.exports.Order = require("./Order");
// module.exports.Product = require("./Product");
module.exports.User = require("./User");
