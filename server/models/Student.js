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
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"],
      },
      phone: {
        type: String,
        required: true,
        // match: [/^[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{3})[\.-)( ]*([0-9]{4})$/,"Must be a phone number!",],
      },

})

const Student = model("Student", studentSchema);

module.exports = Student;