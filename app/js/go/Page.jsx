import React from 'react';
import { Link } from 'react-router-dom';
import CreateButton from 'common/containers/CreateButton';
import Status from 'common/containers/Status';
import { showGoModal } from 'common/actions';
import Login from 'common/containers/Login';
import GoLinksList from 'go/containers/GoLinksList';
import GoModal from 'go/containers/GoModal';
import { GO } from 'go/actions';

import 'scss/page.scss';

const Go = () => (
  <div className="page container">
    <div className="row">
      <div className="col-12">
        <Link to="/go" className="title-link">
          <h2 className="pull-left">Go Links</h2>
        </Link>
        <div className="btn-group pb-2 mt-sm-1 float-sm-right" role="group">
          <CreateButton action={showGoModal} className="btn btn-secondary">
            Create
          </CreateButton>
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[GO]} message />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <GoLinksList />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[GO]} spinner />
      </div>
    </div>
    <GoModal />
  </div>
);

export default Go;
