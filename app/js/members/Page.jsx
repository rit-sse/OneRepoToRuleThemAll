import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Status from 'common/containers/Status';
import Login from 'common/containers/Login';
import UsersTable from 'members/components/UsersTable';
import Profile from 'members/containers/Profile';
import { USERS } from 'members/actions';

import 'scss/page.scss';

const Members = () => (
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
      <Route path="/members" exact component={UsersTable} />
      <Route path="/members/:dce" component={Profile} />
    </Switch>
    <div className="row">
      <div className="col-12">
        <Status type={[USERS]} spinner />
      </div>
    </div>
  </div>
);

export default Members;
