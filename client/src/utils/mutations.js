import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($newEvent: InputEvent!) {
    addEvent(newEvent: $newEvent) {
      username
      events
    }
  }
`;

export const ADD_STUDENT = gql`
  mutation addStudent($newStudent: InputStudent!) {
    addStudent(newStudent: $newStudent) {
      title
      students
    }
  }
`;

export const REMOVE_EVENT = gql`
  mutation removeEvent($_id: ID!) {
    removeEvent(_id: $_id) {
      username
      events
    }
  }
`;

export const REMOVE_STUDENT = gql`
  mutation removeStudent($_id: ID!) {
    removeStudent(_id: $_id) {
      title
      students
    }
  }
`;

export const UPDATE_EVENT_TITLE = gql`
  mutation updateEventTitle($_id: ID!, $title: String!) {
    updateEventTitle(_id: $_id, title: $title) {
        title
    }
  }
`;

export const UPDATE_EVENT_LOCATION = gql`
mutation updateEventLocation($_id: ID!, $location: String!) {
    updateEventLocation(_id: $_id, location: $location) {
        title
        location
    }
  }`;

export const UPDATE_EVENT_DATE = gql`
mutation updateEventDate($_id: ID!, $date: String!) {
    updateEventDate(_id: $_id, date: $date) {
        title
        date
        time
    }
  }`;

export const UPDATE_EVENT_TIME = gql`
mutation updateEventTime($_id: ID!, $time: String!) {
    updateEventTime(_id: $_id, time: $time) {
        title
        date
        time
    }
  }`;

export const UPDATE_EVENT_IMAGESOURCE = gql`
mutation updateEventImageSource($_id: ID!, $imageSource: String!) {
    updateEventImageSource(_id: $_id, imageSource: $imageSource) {
        title
        imageSource
    }
  }`;

export const UPDATE_EVENT_DESCRIPTION = gql`
mutation updateEventDescription($_id: ID!, $description: String!) {
    updateEventDescription(_id: $_id, description: $description) {
        title
        description
    }
  }`;
