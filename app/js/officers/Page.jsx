import React from 'react';
import { COMMITTEES, showOfficerModal } from 'common/actions';
import CreateButton from 'common/containers/CreateButton';
import Status from 'common/containers/Status';
import Login from 'common/containers/Login';
import DeleteOfficerModal from 'officers/containers/DeleteOfficerModal';
import OfficersList from 'officers/containers/OfficersList';
import OfficerForm from 'officers/containers/OfficerForm';
import { OFFICERS } from 'officers/actions';

import 'scss/page.scss';

const Officers = () => (
  <div className="container page">
    <div className="row">
      <div className="col">
        <h2 className="pull-left">Officers</h2>
        <div className="btn-group pb-2 mt-sm-1 float-right" role="group" aria-label="Basic example">
          <CreateButton primary action={showOfficerModal} className="btn btn-secondary" >
            Create
          </CreateButton> {/* TODO: primary casues React to throw an error */}
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
    <DeleteOfficerModal />
  </div>
);

export default Officers;
