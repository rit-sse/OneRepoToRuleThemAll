import React from 'react';
import 'scss/buttons.scss';
// import { Route, Switch } from 'react-router-dom';
import Login from 'containers/general/Login';
import Status from 'containers/general/Status';

const QDB = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="pull-left">QDB</h1>
        <div className="btn-group pull-right" style={{ marginTop: '5px' }} role="group" aria-label="Basic example">
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[]} />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        {/*
        <Switch>
          <Route path="/qdb/approval" component={} />
          <Route path="/qdb/:filter?" component={} />
        </Switch>
        */}
      </div>
    </div>
  </div>
);

export default QDB;
