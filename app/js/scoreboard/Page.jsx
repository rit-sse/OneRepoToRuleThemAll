import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import ControlledLinkButton from 'common/containers/ControlledLinkButton';
import CreateButton from 'common/containers/CreateButton';
import { addMembershipModal } from 'common/actions';
import Status from 'common/containers/Status';
import Login from 'common/containers/Login';
import ViewMembershipsModal from 'scoreboard/containers/ViewMembershipModal';
import ApproveMemberships from 'scoreboard/components/ApproveMemberships';
import AddMembershipModal from 'scoreboard/containers/AddMembershipModal';
import MembershipList from 'scoreboard/components/MembershipList';
import { MEMBERS } from 'scoreboard/actions';

import 'scss/page.scss';

const Scoreboard = ({ location }) => (
  <div className="container page">
    <div className="row">
      <div className="col-12">
        <Link to="/scoreboard" className="title-link">
          <h2 className="float-left">Scoreboard</h2>
        </Link>
        <div className="btn-group pb-2 mt-sm-1 float-sm-right" role="group" aria-label="Basic example">
          <CreateButton action={addMembershipModal} className="btn btn-secondary">
            Create
          </CreateButton>
          <ControlledLinkButton primary path={location.pathname} className="btn btn-secondary" to="/scoreboard/approval">
            Approve
          </ControlledLinkButton>
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[MEMBERS]} message />
      </div>
    </div>
    <div className="row">
      <div className="col-12 text-center">
        <h4>High Score</h4>
      </div>
    </div>
    <div className="row">
      <Switch>
        <Route path="/scoreboard" exact component={MembershipList} />
        <Route path="/scoreboard/approval" component={ApproveMemberships} />
      </Switch>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[MEMBERS]} spinner />
      </div>
    </div>
    <AddMembershipModal />
    <ViewMembershipsModal />
  </div>
);

Scoreboard.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Scoreboard;
