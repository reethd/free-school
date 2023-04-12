import React from 'react'


const AllEvents = ({events}) => {
  return (
    <div>
      <h3>All Upcoming Classes</h3>
      <div >
        {events &&
          events.map((event) => (
          <div className="event-card">
            <h5 className="event-title">{event.title}</h5>
            {event.teacher ? <p>{event.teacher} </p> : null}
           <p>{event.location}</p>
           <p>{event.date}</p>
           <p>{event.time}</p>
           <p>{event.description}</p>
           {event.imageSource ? <img  src={`${event.imageSource}`} alt={`${event.title}`}/> : null}
          </div>
         ))}
      </div>
    </div>
    
    // <div className="class-card">
    //     <h5 className="event-title">{event.title}</h5>
    //     {event.teacher ? <p>{event.teacher} </p> : null}
    //     <p>{event.location}</p>
    //     <p>{event.date}</p>
    //     <p>{event.time}</p>
    //     <p>{event.description}</p>
    //     {event.imageSource ? <img  src={`${event.imageSource}`} alt={`${event.title}`}/> : null}


    // </div>
  )
};

export default AllEvents;