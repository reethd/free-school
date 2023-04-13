import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query singleUser($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      events
    }
  }
`;

export const QUERY_EVENTS = gql`
  query allEvents {
    events {
      _id
      title
      teacher {
        _id
      }
      location
      date
      time
      imageSource
      description
      createdAt
      students {
        name
        email
        phone
      }
    }
  }
`;

export const QUERY_EVENT = gql`
  query singleEvent($_id: _id) {
    event(_id: $_id) {
      createdAt
      title
      teacher {
        _id
      }
      location
      date
      time
      imageSource
      description
      students {
        name
        email
        phone
      }
    }
  }
`;
