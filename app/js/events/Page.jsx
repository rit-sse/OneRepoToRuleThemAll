import React from 'react';
import { Route, Link } from 'react-router-dom';
import CreateButton from 'common/containers/CreateButton';
import { showEventModal, COMMITTEES } from 'common/actions';
import Status from 'common/containers/Status';
import Login from 'common/containers/Login';
import Button from 'common/components/Button';
import CommitteesList from 'events/containers/CommitteesList';
import EventModal from 'events/containers/EventModal';
import EventList from 'events/containers/EventList';
import { EVENTS } from 'events/actions';
import 'scss/page.scss';

const Event = () => (
  <div className="container page">
    <div className="row">
      <div className="col-12">
        <Link to="/events" className="title-link">
          <h2 className="pull-left">Events</h2>
        </Link>

        <div className="btn-group pb-2 mt-sm-1 float-right" role="group" aria-label="Basic example">
          <CreateButton action={showEventModal} className="btn btn-secondary" >
            Create
          </CreateButton>
          <Login className="btn btn-sse" />
        </div>
        <a href="/api/v2/events.ics" rel="noopener" className="float-right" style={{marginTop: "4px", marginRight: "4px"}}>
            <Button className="btn btn-sse">
                <i className="fas fa-calendar-alt" aria-hidden="true" alt="Import Calendar" title="Import Calendar" />
            </Button>
        </a>
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
