import React from 'react';
import { Route, Link } from 'react-router-dom';
import { EVENTS } from 'actions/events';
import Login from 'containers/general/Login';
import Status from 'containers/general/Status';
import { COMMITTEES } from 'actions/committees';
import EventList from 'containers/events/EventList';
import EventModal from 'containers/events/EventModal';
import CommitteesList from 'containers/events/CommitteesList';
import CreateButton from 'containers/general/CreateButton';
import { showEventModal } from 'actions/modal';
import 'scss/page.scss';

const Event = () => (
  <div className="container page">
    <div className="row">
      <div className="col-12">
        <Link to="/events" className="title-link">
          <h2 className="float-sm-left">Events</h2>
        </Link>
        <div className="clearfix hidden-sm-up" />
        <div className="btn-group pb-2 mt-sm-1 float-sm-right" role="group" aria-label="Basic example">
          <CreateButton action={showEventModal} className="btn btn-secondary" >
            Create
          </CreateButton>
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[COMMITTEES, EVENTS]} message />
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
        <Status type={[COMMITTEES, EVENTS]} spinner />
      </div>
    </div>
    <EventModal />
  </div>
);

export default Event;
