const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const { User, Student, Event } = require("../models");
const jwt = require("jsonwebtoken");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },    
    user: async (parent, { username }) => {
      return await User.findOne({ username })
        .populate("events")
        .populate({ path: "events", populate: "students" });
    },
    users: async (parent, args) => {
      return await User.find().populate("events");
    },
    events: async () => {
      return await Event.find().populate("teacher");

    },
    event: async (parent, { _id }) => {
      return await Event.findById({ _id: _id });
    },
  },

  Mutation: {
    login: async (parent, { username, password }) => 
    {
      const user = await User.findOne({ username: username });
      if (!user) {
        throw new AuthenticationError("Invalid username");
      }

      const correctPwd = await bcrypt.compare(password, user.password);
      if (!correctPwd) {
        throw new AuthenticationError("Invalid password");
      }

      const token = jwt.sign(
        { _id: user._id, username: user.username, email: user.email },
        "classiccitycoders",
        { expiresIn: "1h" }
      );

      return { user, token, tokenExpiration: 1 };
    },

    addUser: async (parent, args) => {
      try {
        const existingUser = await User.findOne({ username: args.username });
        if (existingUser) {
          throw new Error("There is already a user with that name!");
        }
        const hashedPassword = await bcrypt.hash(args.password, 12);
        const user = await User.create({ ...args, password: hashedPassword });
        await user.save();

        const token = jwt.sign(
          { _id: user._id, username: user.username, email: user.email },
          "classiccitycoders",
          { expiresIn: "1h" }
        );

        return { user, token, tokenExpiration: 1 };
      } catch (err) {
        throw err;
      }
    },

    addEvent: async (parent, args, context) => {
      
      const event = await Event.create({ ...args, teacher: context.user._id });

      const user = await User.findById(event.teacher);

        if (!user){
          throw new Error('User not found');
        }

          await User.findOneAndUpdate(
          { _id: event.teacher },
          { $addToSet: { events: event._id } }
        );

        return event;
    },

    addStudent: async (parent, args) => {
      const updatedEvent = await Event.findByIdAndUpdate(
        { _id: args.event },
        { $push: { students: args.newStudent } },
        { new: true }
      );
      return updatedEvent;
    },

    removeEvent: async (parent, { _id }) => {
      const event = await Event.findOneAndDelete({ _id });
      return await User.findByIdAndUpdate(
        { _id: event.teacher },
        { $pull: { events: event._id } },
        { new: true }
      );
    },

    removeStudent: async (parent, { _id, event }) => {
      return await Event.findByIdAndUpdate(
        { _id: event },
        { $pull: { students: { _id } } },
        { new: true }
      );
    },

    updateEventTitle: async (parent, { _id, title }) => {
      return await Event.findOneAndUpdate(
        { _id: _id },
        { title },
        { new: true, runValidators: true }
      );
    },

    updateEventLocation: async (parent, { _id, location }) => {
      return await Event.findOneAndUpdate(
        { _id: _id },
        { location },
        { new: true, runValidators: true }
      );
    },

    updateEventDate: async (parent, { _id, date }) => {
      return await Event.findOneAndUpdate(
        { _id: _id },
        { date },
        { new: true, runValidators: true }
      );
    },

    updateEventTime: async (parent, { _id, time }) => {
      return await Event.findOneAndUpdate(
        { _id: _id },
        { time },
        { new: true, runValidators: true }
      );
    },

    updateEventImageSource: async (parent, { _id, imageSource }) => {
      return await Event.findOneAndUpdate(
        { _id: _id },
        { imageSource },
        { new: true, runValidators: true }
      );
    },

    updateEventDescription: async (parent, { _id, description }) => {
      return await Event.findOneAndUpdate(
        { _id: _id },
        { description },
        { new: true, runValidators: true }
      );
    },
  },
};

module.exports = resolvers;
