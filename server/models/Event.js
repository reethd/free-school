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
      type: Schema.Types.ObjectId,
      ref: 'Student'
    },
  ],
});

const Event = model("Event", eventSchema);

module.exports = Event;
