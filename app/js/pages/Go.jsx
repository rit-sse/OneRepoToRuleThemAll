import React from 'react';
import GoLinksList from 'containers/go/GoLinksList';
import Status from 'containers/general/Status';
import { GO } from 'actions/go';
import { Link } from 'react-router-dom';
import Login from 'containers/general/Login';
import CreateButton from 'containers/general/CreateButton';
import GoModal from 'containers/go/GoModal';
import { showGoModal } from 'actions/modal';
import 'scss/page.scss';
import 'scss/go.scss';

const Go = () => (
  <div className="page container">
    <div className="row">
      <div className="col-12">
        <Link to="/go" className="title-link">
          <h2 className="pull-left">Go Links</h2>
        </Link>
        <div className="clearfix hidden-sm-up" />
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
