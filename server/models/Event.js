const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  teacher: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  imageSource: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  students: [
    {
      studentName: {
        type: String,
        required: true,
        trim: true,
      },
      studentEmail: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"],
      },
      studentPhone: {
        type: String,
        required: true,
        // match: [/^[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{4})$/,"Must be a phone number!",],
      },
    },
  ],
});

const Event = model("Event", eventSchema);

module.exports = Event;
