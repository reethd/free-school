const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String
    email: String!
    events: [Event]
  }

  type Event {
    _id: ID!
    title: String!
    location: String!
    date: String!
    time: String!
    imageSource: String
    description: String!
    createdAt: String
    students: [Student]
  }

  type Student {
    _id: ID!
    name: String!
    email: String!
    phone: String!
    event: Event!
  }

  type Auth {
    token: ID!
    user: User
    tokenExpiration: Int!
  }

  input InputEvent {
    title: String!
    location: String!
    date: String!
    time: String!
    imageSource: String
    description: String!
  }

  input InputStudent {
    name: String!
    email: String!
    phone: String!
  }

  input InputUser {
    username: String!
    password: String!
    email: String!
  }

  type Query {
    me: User
    users: [User]
    user(_id: ID!): User
    events: [Event]
    event(_id: ID!): Event
    students: [Student]
    student(_id: ID!): Student
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!, email: String!): Auth
    addEvent(newEvent: InputEvent): Event
    addStudent(newStudent: InputStudent, event: ID!): Event
    removeEvent(_id: ID!): User
    removeStudent(_id: ID!, event: ID!): Event
    updateEventTitle(_id: ID!, title: String): Event
    updateEventLocation(_id: ID!, location: String): Event
    updateEventDate(_id: ID!, date: String): Event
    updateEventTime(_id: ID!, time: String): Event
    updateEventImageSource(_id: ID!, imageSource: String): Event
    updateEventDescription(_id: ID!, description: String): Event
  }
`;

module.exports = typeDefs;
