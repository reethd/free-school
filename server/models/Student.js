const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  phone: {
    type: String,
    required: true,
    // match: [/^[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{4})$/,"Must be a phone number!",],
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
  },
});

// const Student = model("Student", studentSchema);

module.exports = studentSchema;
