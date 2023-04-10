const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const { User, Student, Event } = require("../models");
const jwt = require("jsonwebtoken");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
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

      // const correctPw = await user.isCorrectPassword(password);
      // if (!correctPw) {
      //   throw new AuthenticationError("Invalid password");
      // }
      // const token = signToken(user);
      // return { token, user };
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
        return { user, token, tokenExpiration: 1 };
      } catch (err) {
        throw err;
      }

      // return User.findOne({ username: args.username })
      //   .then((user) => {
      //     if (user) {
      //       throw new Error("There is already a user with that name!");
      //     }
      //     return bcrypt.hash(args.password, 12);
      //   })
      //   .then((hashedPassword) => {
      //     const user = new User({
      //       username: args.username,
      //       email: args.email,
      //       password: hashedPassword,
      //     });
      //     return user.save();
      //   })
      //   .then((result) => {
      //     return { ...result._doc, password: null, _id: result.id };
      //   })
      //   .catch((err) => {
      //     throw err;
      //   });

      // const user = await User.create(args);
      // const token = signToken(user);
      // return { token, user };
    },

    addEvent: async (parent, args, context) => {
      
      const event = await Event.create({ ...args, teacher: context.user._id });
      // const event = await Event.create({ ...args, teacher: "643085d77ccfe593d3eb9c21" });

      // let createdEvent;

      try {
        // const result = await event.save();
        // createdEvent = {
        //   ...result._doc,
        //   _id: result._doc._id.toString(),
        //   teacher: user.bind(this, result._doc.teacher)
        // };
        const user = await User.findById(event.teacher);

        if (!user){
          throw new Error('User not found');
        }
        user.events.push(event)
        return await user.save();
      } catch (err) {
        console.log(err)
        throw err;
      }

      // return await User.findByIdAndUpdate(
      //   { _id: event.teacher },
      //   { $push: { events: event._id } },
      //   { new: true }
      // );
    },

    addStudent: async (parent, args) => {
      // const student = await Student.create(args);
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
      // const student = await Student.findOneAndDelete({_id});
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
