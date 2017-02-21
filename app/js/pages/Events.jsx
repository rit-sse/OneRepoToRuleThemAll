import React from 'react';
import 'scss/buttons.scss';
import { Route } from 'react-router-dom';
import { EVENTS } from '../actions/events';
import { COMMITTEES } from '../actions/committees';
import Login from '../containers/Login';
import EventList from '../containers/EventList';
import CommitteesList from '../containers/CommitteesList';
import Status from '../containers/Status';
import EventModal from '../containers/EventModal';
import CreateEventButton from '../containers/CreateEventButton';

const Event = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="pull-left">Events</h1>
        <div className="btn-group pull-right" style={{ marginTop: '5px' }} role="group" aria-label="Basic example">
          <CreateEventButton className="btn btn-secondary" label="Create Event" />
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={COMMITTEES}>
          Filter By: <CommitteesList />
        </Status>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={EVENTS}>
          <Route path="/events/:committee?" component={EventList} />
        </Status>
      </div>
    </div>
    <EventModal />
  </div>
);

export default Event;
