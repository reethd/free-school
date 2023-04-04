const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String!
        password: String!
        email: String!
        events: [Event]
    }
    type Event {
        _id: ID!
        title: String!
        teacher: [User]
        location: String!
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
    }

    input InputEvent {
        title: String!
        location: String!
        time: String!
        imageSource: String
        description: String!
    }
    
    input InputStudent {
        name: String!
        email: String!
        phone: String!
    }      

    type Query {
        users: [User]
        user: User
        events: [Event]
        event(eventId: ID!): Event
        students: [Student]
        student(studentId: ID!): Student
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addEvent(newEvent: InputEvent!): User
        addStudent(newStudent: InputStudent!): Event
        removeEvent(_id: ID!): User
        removeStudent(_id: ID!, event: ID!): Event
        updateEvent(_id: ID!): User
    }

`;

module.exports = typeDefs;