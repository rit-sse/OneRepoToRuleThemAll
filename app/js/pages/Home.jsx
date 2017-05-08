import React from 'react';
import asyncComponent from 'components/general/AsyncComponent';
import LabImg from 'img/betterLab.jpg';
import 'scss/home.scss';

// Load the events list async from the Events Chunck
const HomeEvents = asyncComponent(
  () => import(/* webpackChunkName: "Events" */ 'containers/events/HomeEvents'),
  [() => import(/* webpackChunkName: "Events" */ 'reducers/events')],
  ['events'],
);

const PageHome = () => (
  <div className="container-fluid">
    <div className="row bot-1">
      <div className="hero">
        <div className="hero-body">
          <img className="hero-img" src={LabImg} alt="SSE Lab" />
          <div className="hero-text">
            <p>Weekly Meetings</p>
            <p>Wed @ 3:00pm</p>
            <p>GOL-1670</p>
            <p>All Welcome!</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="col-12">
            <h4 className="front-heading">Mentoring</h4>
            <p>
              Mentoring hours are 10am - 6pm Mon - Fri.
              The SSE has a mentor on duty every day that can help with SE, CS and other technical classes.
              There is also a physics tutor who hold open mentoring hours in our lab.
            </p>
          </div>
          <div className="col-12">
            <h4 className="front-heading">Getting involved</h4>
            <p>
              Want to get involved in the SSE? Feel free to stop by our mentoring lab at RIT.
              You can find us in building 70 (Golisano), room 1670. Students of any major are welcome!
            </p>
          </div>
        </div>
        <div className="col-12 col-md-5 left-border">
          <div className="col-12">
            <h4 className="front-heading">Upcoming Events</h4>
            <HomeEvents />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PageHome;
