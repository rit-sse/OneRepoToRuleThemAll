import React from 'react';
import asyncComponent from 'common/components/AsyncComponent';
import Hero from 'home/components/Hero';
import MentoringSVG from 'img/Mentoring.svg';
import ProjectsSVG from 'img/Projects.svg';

import 'scss/home.scss';

// Load the events list async from the Events Chunck
const HomeEvents = asyncComponent(() => import(/* webpackChunkName: "Events" */ 'events/containers/HomeEvents'));

const PageHome = () => (
  <div>
    <Hero />
    <div className="flex-container">
      <div className="flex-2 flex-content">
        <img className="section-header-svg" src={MentoringSVG} />
        <p>
          Need help with an SE, CS, or physics assignment? We've got you covered! Our mentors are always happy to help.
        </p>
        <p>
          <strong>Monday - Thursday: </strong><span>10 am - 6 pm in the lab (GOL 1670)</span>
        </p>
        <p>
          <strong>Friday: </strong>
          <span>10 am - 6 pm on the <a href="https://sse.rit.edu/go/mentordiscord" target="_blank">mentoring Discord server</a></span>
        </p>
        <img className="section-header-svg" src={ProjectsSVG} />
          <p>
            SSE projects are a great way to improve your skills and achieve something with others.
          </p>
          <p>
            Listed below are our active projects. Want to propose one of your own? Contact <a href="mailto: projects@sse.rit.edu">projects@sse.rit.edu</a> or join the <a href="https://rit-sse.slack.com/archives/C07MFN265" target="_blank">#sse-projects Slack channel</a>.
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
