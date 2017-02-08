import React from 'react';
import 'scss/buttons.scss';
import { EVENTS } from '../actions/events';
import Login from '../containers/Login';
import EventList from '../containers/EventList';
import Status from '../containers/Status';

const Event = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="pull-left">Events</h1>
        <Login className="btn btn-sse pull-right" />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={EVENTS}>
          <EventList />
        </Status>
      </div>
    </div>
  </div>
);

export default Event;
