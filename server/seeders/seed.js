const db = require("../config/connection");
const { User, Event } = require("../models");

const userData = require("./userData.json");
const eventData = require("./eventData.json");
const studentData = require("./studentData.json");

db.once("open", async () => {
  await User.deleteMany({});
  await Event.deleteMany({});

  const users = await User.insertMany(userData);
  const events = await Event.insertMany(eventData);

  console.log("It worked!");
  process.exit(0);
});
