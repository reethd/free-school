import React, { useState } from 'react';
import Login from "./Login"
import isAuth from '../utils/isAuth';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

const AddEvent = () => {

const [formState, setFormState] = useState({
    title: '',
    location: '',
    date: '',
    time:'',
    imageSource:'',
    description:''
});
    
const [addEvent, { error}] = useMutation(ADD_EVENT);

// const {loading, data} = useQuery(QUERY_ME)

// const user = data?.me || data?.user || {};

if(!isAuth.loggedIn()) {
        return <Login />
 }



const handleChange = (event) => {
const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
    <h1>Add Event</h1>
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