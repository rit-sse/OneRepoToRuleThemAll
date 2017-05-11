import React from 'react';
import { OFFICERS } from 'actions/officers';
import { COMMITTEES } from 'actions/committees';
import Login from 'containers/general/Login';
import Status from 'containers/general/Status';
import OfficersList from 'containers/officers/OfficersList';
import OfficerForm from 'containers/officers/OfficerForm';
import CreateButton from 'containers/general/CreateButton';
import { showOfficerModal } from 'actions/modal';
import 'scss/page.scss';

const Officers = () => (
  <div className="container page">
    <div className="row">
      <div className="col">
        <h1 className="pull-left">Officers</h1>
        <div className="btn-group pull-right" style={{ marginTop: '5px' }} role="group" aria-label="Basic example">
          <CreateButton primary action={showOfficerModal} className="btn btn-secondary" >
            Create Officer
          </CreateButton>

          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Status type={[COMMITTEES, OFFICERS]} message spinner />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>Primary Officers</h2>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <OfficersList primary />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h2>Committee Heads</h2>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <OfficersList />
      </div>
    </div>
    <OfficerForm />
  </div>
);

export default Officers;
