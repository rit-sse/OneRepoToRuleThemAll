import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Status from 'common/containers/Status';
import LoginRequired from 'common/components/LoginRequired';
import Login from 'common/containers/Login';
import UsersTable from 'members/components/UsersTable';
import Profile from 'members/containers/Profile';
import { USERS } from 'members/actions';

import 'scss/page.scss';

const Members = props => (
  <div className="container page">
    <div className="row">
      <div className="col">
        <Link to="/members" className="title-link">
          <h2 className="float-left">Members</h2>
        </Link>
        <div className="btn-group pb-2 mt-sm-1 float-right" role="group" aria-label="">
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[USERS]} message />
      </div>
    </div>
    <Switch>
      <Route path="/members" exact component={props.isSignedIn ? UsersTable : LoginRequired} />
      <Route path="/members/:dce" component={props.isSignedIn ? Profile : LoginRequired} />
    </Switch>
    <div className="row">
      <div className="col-12">
        <Status type={[USERS]} spinner />
      </div>
    </div>
  </div>
);

Members.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
};

Members.defaultValues = {
  isSignedIn: false,
};

const mapStateToProps = ({ auth }) => ({
  isSignedIn: !!auth.user,
});

export default connect(mapStateToProps, null)(Members);
