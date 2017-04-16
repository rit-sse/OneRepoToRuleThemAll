import React from 'react';
import { OFFICERS } from 'actions/officers';
import { COMMITTEES } from 'actions/committees';
import Login from 'containers/general/Login';
import Status from 'containers/general/Status';
import 'scss/page.scss';

const Officers = () => (
  <div className="container page">
    <div className="row">
      <div className="col">
        <h1 className="pull-left">Officers</h1>
        <div className="btn-group pull-right" style={{ marginTop: '5px' }} role="group" aria-label="Basic example">
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Status type={[COMMITTEES, OFFICERS]} message />
      </div>
    </div>
  </div>
);

export default Officers;
