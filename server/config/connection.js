const mongoose = require("mongoose");

//Sets up connection to use heroku environment variables

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/free-school",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
