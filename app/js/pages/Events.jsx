import React from 'react';
import 'scss/buttons.scss';
import Login from '../containers/Login';
import EventList from '../containers/EventList';
import Status from '../components/Status';

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
        <EventList />
        <Status />
      </div>
    </div>
  </div>
);

export default Event;
