import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyEvents from "./pages/MyEvents";
import SignUp from "./pages/SignUp";
import AddEvent from "./pages/AddEvent";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <Routes>
            <Route path="/free-school" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myevents" element={<MyEvents />} />
            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
