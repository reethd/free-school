const mongoose = require("mongoose");
// require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/free-school",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
