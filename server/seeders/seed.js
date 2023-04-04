const db = require("../config/connection");
const { User, Event } = require("../models");

const userData = require("./userData.json");
const eventData = require("./eventData.json");
const studentData = require("./studentData.json");

db.once("open", async () => {
  await User.deleteMany({});
  await Event.deleteMany({});

  // const users = await User.insertMany(userData);
  const events = await Event.insertMany(eventData);

  //   for (newEvent of events) {
  //     // randomly add each event to a user
  //     const tempUser = users[Math.floor(Math.random() * users.length)];
  //     tempUser.events.push(newEvent._id);
  //     // assigns teacher to an event
  //     newEvent.teacher = tempUser._id;

  //     await newEvent.save();
  //     await tempUser.save();
  //   }

  console.log("It worked!");
  process.exit(0);
});
