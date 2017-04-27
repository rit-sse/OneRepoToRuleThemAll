import React from 'react';
import HomeEvents from 'containers/events/HomeEvents';
import frontPage from 'img/lab.png';
import 'scss/home.scss';

const PageHome = () => (
  <div>
    <div className="row bot-1">
      <div className="col-12 hero">
        <div className="container">
          <div className="pillars">
            <p className="pillar">Mentoring</p>
            <p className="pillar">Networking</p>
            <p className="pillar">Projects</p>
            <p className="pillar">Events</p>
          </div>
          <img className="image" src={frontPage} alt="of lab" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12 offset-md-1 col-md-6">
        <div className="col-12">
          <h4>Mentoring</h4>
          <p>
            The SSE has a mentor on duty every day that can help with intro SE and CS classes.
            There is also a physics tutor who hold open mentoring hours in our lab.
            Mentoring hours are 10am - 6pm Mon - Fri
          </p>
        </div>
        <div className="col-12">
          <h4>Getting involved</h4>
          <p>
            Want to get involved in the SSE? Feel free to stop by our mentoring lab at RIT.
            You can find us in building 70 (Golisano), room 1670. Students of any major are welcome!
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4 left-border">
        <div className="col-12">
          <h4>Upcoming Events</h4>
          <HomeEvents />
        </div>
      </div>
    </div>
  </div>
);

export default PageHome;
