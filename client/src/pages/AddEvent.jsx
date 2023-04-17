import React, { useState } from 'react';
import Login from "./Login"
import isAuth from '../utils/isAuth';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';

const AddEvent = () => {

// Sets empty default form state
const [formState, setFormState] = useState({
    title: '',
    location: '',
    date: '',
    time:'',
    imageSource:'',
    description:''
});
    
const [addEvent, { error}] = useMutation(ADD_EVENT);

// Sends user to login page if not logged in
if(!isAuth.loggedIn()) {
        return <Login />
 }


// Saves current form values
const handleChange = (event) => {
const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Runs addEvent mutation with form values on submit
const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log({...formState});

    try {
      await addEvent({
        variables: {...formState},
      });

    } catch (e) {
      console.error(e);
    }

    setFormState({
        title: '',
        location: '',
        date: '',
        time:'',
        imageSource:'',
        description:''
    });
  };



 return (
    <div>
    <h1>Add Class</h1>
    <form onSubmit={handleFormSubmit}>
     <input
        placeholder="Title"
        name="title"
        type="text"
        value={formState.title}
        onChange={handleChange}
     />
    <input
        placeholder="Location"
        name="location"
        type="text"
        value={formState.location}
        onChange={handleChange}
     />
     <input
        placeholder="Date"
        name="date"
        type="text"
        value={formState.date}
        onChange={handleChange}
     />
     <input
        placeholder="Time"
        name="time"
        type="text"
        value={formState.time}
        onChange={handleChange}
     />
     <input
        placeholder="Image Source"
        name="imageSource"
        type="text"
        value={formState.imageSource}
        onChange={handleChange}
     />
     <input
        placeholder="Description"
        name="description"
        type="text"
        value={formState.description}
        onChange={handleChange}
     />     
     <button type="submit">Submit</button>
        
    </form>
    </div>


  )
}

export default AddEvent