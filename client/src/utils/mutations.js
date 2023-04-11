import { gql } from "@apollo/client";

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
mutation AddEvent($title: String!, $location: String!, $date: String!, $time: String!, $description: String!, $imageSource: String) {
  addEvent(title: $title, location: $location, date: $date, time: $time, description: $description, imageSource: $imageSource) {
    title
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
