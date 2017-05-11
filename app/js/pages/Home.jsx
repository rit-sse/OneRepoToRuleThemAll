import React from 'react';
import asyncComponent from 'components/general/AsyncComponent';
import SmoothImageDiv from 'components/general/SmoothImageDiv';
import LabImg from 'img/betterLab.jpg';
import RapDevImg from 'img/rapdev.jpg';
import 'scss/home.scss';

// Load the events list async from the Events Chunck
const HomeEvents = asyncComponent(
  () => import(/* webpackChunkName: "Events" */ 'containers/events/HomeEvents'),
  [() => import(/* webpackChunkName: "Events" */ 'reducers/events')],
  ['events'],
);

const PageHome = () => (
  <div>
    <div className="hero">
      <SmoothImageDiv
        className="hero-img left"
        imageUrl={LabImg}
        delayMs={400}
      />
      <div className="hero-content-container">
        <div className="fancy-hero-container" />
        <div className="hero-content">
          <h3>Weekly Meetings</h3>
          <h6>Wed @ 3:00pm</h6>
          <h6>GOL-1670</h6>
          <h6>All Are Welcome!</h6>
        </div>
      </div>
      <SmoothImageDiv
        className="hero-img right"
        imageUrl={RapDevImg}
        delayMs={400}
      />
    </div>
    <div className="flex-container">
      <div className="flex-2 flex-content">
        <h4 className="front-heading">Mentoring <small>10am - 6pm, Mon - Fri</small></h4>
        <p>
          The SSE has a mentor on duty every day that can help with SE, CS and other technical classes.
          There is also a physics tutor who hold open mentoring hours in our lab.
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
