import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS} from '../utils/queries';
import EventCard from '../components/EventCard';

const Home = () => {

    const { loading, data } = useQuery(QUERY_EVENTS);
    const events = data?.events || [];

    if (loading) {
        return(
            <div>Loading...</div>
        )
    }

  return (
    <div>
        <h1>All Upcoming Classes</h1>
        <div>

<div className="center row">
      <h3 className="title">All Upcoming Classes</h3>
      <div className="class-list">
        {events.map((event) => (
          <EventCard
            key={event.title}
            event={event}
          />
        ))}
      </div>
    </div>
            
        </div>

    </div>
  )
}

export default Home;