const { AuthenticationError } = require("apollo-server-express");
const { User, Student, Event } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return await User.findById({ username })
        .populate("events")
        .populate({ path: "events", populate: "students" });
    },
    events: async () => {
      return await Event.find({}).populate("teacher");
    },
    event: async () => {
      return await Event.findOne({}).populate("");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    addEvent: async (
      parent,
      { title, location, time, imageSource, description }
    ) => {
      return await Event.create({
        title,
        location,
        time,
        imageSource,
        description,
      });
    },

    addStudent: async (parent, { name, email, phone, event }) => {
      const student = await Student.create({ name, email, phone, event });
      const updatedEvent = await Event.findByIdAndUpdate(
        { _id: student.event.id },
        { $push: { students: student } },
        { new: true }
      );
      return updatedEvent;
    },

    removeEvent: async (parent, { id }) => {
      return Event.findOneAndDelete({ _id: id });
    },

    removeStudent: async (parent, { id }) => {
      return Student.findOneAndDelete({ _id: id });
    },

    updateEvent: async (
      parent,
      { id, title, location, time, imageSource, description }
    ) => {
      return Event.findOneAndUpdate(
        { _id: id },
        { title },
        { location },
        { time },
        { imageSource },
        { description }
      );
    },
  },
};

module.exports = resolvers;
