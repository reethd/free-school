import React, {useState} from 'react'
import { ADD_STUDENT } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import './AllEventsStyles.css'


const AllEvents = ({events}) => {

  // Sets states for modal visibility, currently selected event and form state
  const [showModal, setShowModal] = useState(false)
  const [currentEvent, setCurrentEvent] = useState()
  
  const [addStudent, { error, data }] = useMutation(ADD_STUDENT);
  const [formState, setFormState] =useState({
    name: '',
    email: '',
    phone: '',
  })

  // Shows Add Student modal and selects current event
  const handleOnClick = (id) => {
    setShowModal(true)
    setCurrentEvent(id)
  }

  // Saves current value input to form state
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Prevents empty form from being submitted, then runs addStudent mutation with form values
  const handleFormSubmit = async (event) => {
    console.log(event)
    event.preventDefault();

    try {
    console.log({ newStudent: formState, event: currentEvent})
      const { data } = await addStudent({
        variables: { newStudent: formState, event: currentEvent},
      });


    } catch (e) {
      console.error(e);
    }


  }


  return (
    <div>
      <div className="event">
       
        {/* Maps all events to the front page */}
        {events &&
          events.map((event) => (
          <div className="event-card" key={event._id}>
            <h5 className="event-title">{event.title}</h5>
            {event.teacher ? <p>{event.teacher} </p> : null}
           <p>{event.location}</p>
           <p>{event.date}</p>
           <p>{event.time}</p>
           <p>{event.description}</p>
           {event.imageSource ? <img  src={`${event.imageSource}`} alt={`${event.title}`}/> : null}
           <div className="text-box">
            <a href="#module"><button onClick={()=>handleOnClick(event._id)}>Sign up for this class</button></a></div>

          </div>

         ))}
         {/* Add student modal */}
         {showModal && <div>
          <h2 id="modal">Enter your information here!</h2>
         <form onSubmit={handleFormSubmit}> <input
                  placeholder="Your name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  placeholder="Your phone number"
                  name="phone"
                  type="text"
                  value={formState.phone}
                  onChange={handleChange}
                />
                <div class="btn"><button type="submit" > Submit  </button></div>
                </form>
                <div class="btn"><button onClick={()=> setShowModal(false)}>Exit</button></div>
         </div>}
      </div>
    </div>


  )
};

export default AllEvents;