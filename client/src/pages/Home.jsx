import React from 'react'
import { useQuery } from '@apollo/client';
import {QUERY_EVENTS} from '../utils/queries';
import AllEvents from '../components/AllEvents';

const Home = () => {

    const { loading, data } = useQuery(QUERY_EVENTS);
    const events = data?.events || []; 

    

  return (
    <main>
      <div >
        <h1>All Upcoming Classes.</h1>
        <div className="events-board">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <AllEvents
              events={events}
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Home;