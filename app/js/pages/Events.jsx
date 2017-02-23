import React from 'react';
import 'scss/buttons.scss';
import { Route } from 'react-router-dom';
import { EVENTS } from 'actions/events';
import Login from 'containers/general/Login';
import Status from 'containers/general/Status';
import { COMMITTEES } from 'actions/committees';
import EventList from 'containers/events/EventList';
import EventModal from 'containers/events/EventModal';
import CommitteesList from 'containers/events/CommitteesList';
import CreateEventButton from 'containers/events/CreateEventButton';

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
        Filter By: <CommitteesList />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Route path="/events/:committee?" component={EventList} />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[COMMITTEES, EVENTS]} />
      </div>
    </div>
    <EventModal />
  </div>
);

export default Event;
