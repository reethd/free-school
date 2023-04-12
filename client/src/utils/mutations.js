import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        username
        password
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
    }
  }
`;

export const ADD_EVENT = gql`
  mutation AddEvent(
    $title: String!
    $location: String!
    $date: String!
    $time: String!
    $description: String!
    $imageSource: String
  ) {
    addEvent(
      title: $title
      location: $location
      date: $date
      time: $time
      description: $description
      imageSource: $imageSource
    ) {
      title
    }
  }
`;

export const ADD_STUDENT = gql`
  mutation AddStudent($event: ID!, $newStudent: InputStudent) {
    addStudent(event: $event, newStudent: $newStudent) {
      students {
        name
        phone
        email
      }
    }
  }
`;

export const REMOVE_EVENT = gql`
  mutation RemoveEvent($id: ID!) {
    removeEvent(_id: $id) {
      _id
      events {
        title
      }
    }
  }
`;

export const REMOVE_STUDENT = gql`
  mutation removeStudent($_id: ID!) {
    removeStudent(_id: $_id) {
      _id
      students{
        name
      }
    }
  }
`;

export const UPDATE_EVENT_TITLE = gql`
  mutation updateEventTitle($id: ID!, $title: String!) {
    updateEventTitle(_id: $id, title: $title) {
      title
    }
  }
`;

export const UPDATE_EVENT_LOCATION = gql`
  mutation UpdateEventLocation($id: ID!, $location: String) {
    updateEventLocation(_id: $id, location: $location) {
      _id
      location
    }
  }
`;

export const UPDATE_EVENT_DATE = gql`
  mutation UpdateEventDate($id: ID!, $date: String) {
    updateEventDate(_id: $id, date: $date) {
      _id
      date
    }
  }
`;

export const UPDATE_EVENT_TIME = gql`
  mutation UpdateEventTime($id: ID!, $title: String) {
    updateEventTitle(_id: $id, title: $title) {
      _id
      title
    }
  }
`;

export const UPDATE_EVENT_IMAGESOURCE = gql`
  mutation UpdateEventDate($id: ID!, $imageSource: String) {
    updateEventImageSource(_id: $id, imageSource: $imageSource) {
      _id
      imageSource
    }
  }
`;

export const UPDATE_EVENT_DESCRIPTION = gql`
  mutation UpdateEventDate($id: ID!, $description: String) {
    updateEventDescription(_id: $id, description: $description) {
      _id
      description
    }
  }
`;
