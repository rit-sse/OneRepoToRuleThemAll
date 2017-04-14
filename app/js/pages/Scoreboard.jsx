import React/* , { PropTypes }*/ from 'react';
import Login from 'containers/general/Login';
import Status from 'containers/general/Status';
import MemberList from 'containers/scoreboard/MembersList';
import AddMembershipButton from 'containers/scoreboard/AddMembershipButton';
import { MEMBERS } from 'actions/members';
import ViewMembershipsModal from 'containers/scoreboard/ViewMembershipModal';
import 'scss/page.scss';

const Scoreboard = (/* { location } */) => (
  <div className="container page">
    <div className="row">
      <div className="col-12">
        <h1 className="pull-left">Scoreboard</h1>
        <div className="btn-group pull-right" style={{ marginTop: '5px' }} role="group" aria-label="Basic example">
          <AddMembershipButton className="btn btn-secondary">
            Add Membership
          </AddMembershipButton>
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
      <div className="offset-1 col-10 offset-md-2 col-md-8">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Member</th>
              <th>Score</th>
            </tr>
          </thead>
          <MemberList wrapper="tbody" />
        </table>
      </div>
    </div>
    <ViewMembershipsModal />
  </div>
);

/*
Scoreboard.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
*/

export default Scoreboard;
