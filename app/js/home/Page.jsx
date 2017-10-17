import React from 'react';
import asyncComponent from 'general/components/AsyncComponent';
import Hero from 'home/components/Hero';

import 'scss/home.scss';

// Load the events list async from the Events Chunck
const HomeEvents = asyncComponent(() => import(/* webpackChunkName: "Events" */ 'events/containers/HomeEvents'));

const PageHome = () => (
  <div>
    <Hero />
    <div className="flex-container">
      <div className="flex-2 flex-content">
        <h4 className="front-heading">Mentoring <small>10am - 6pm, Mon - Fri</small></h4>
        <p>
          The SSE has a mentor on duty every day that can help with SE, CS and other technical classes.
          There are also physics tutors who hold open mentoring hours in our lab.
        </p>
        <h4 className="front-heading">Getting involved</h4>
        <p>
          Want to get involved in the SSE? Feel free to stop by our mentoring lab at RIT.
          You can find us in building 70 (Golisano), room 1670. Students of any major are welcome!
        </p>
      </div>
      <div className="flex-1 flex-border">
        <h4 className="front-heading">Upcoming Events</h4>
        <HomeEvents />
      </div>
    </div>
  </div>
);

export default PageHome;
