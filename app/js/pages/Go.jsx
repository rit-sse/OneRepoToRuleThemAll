import React from 'react';
import GoLinksList from 'containers/go/GoLinksList';
import Status from 'containers/general/Status';
import { GO } from 'actions/go';
import { Link } from 'react-router-dom';
import Login from 'containers/general/Login';
import 'scss/page.scss';
import 'scss/go.scss';

const Go = () => (
  <div className="page container">
    <div className="row">
      <div className="col-12">
        <Link to="/go" className="title-link">
          <h1 className="pull-left">Go Links</h1>
        </Link>
        <div className="btn-group pull-right" role="group">
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Status type={[GO]} />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered table-striped table-go">
          <thead>
            <tr>
              <th>ShortName</th>
              <th>Link</th>
            </tr>
          </thead>
          <GoLinksList />
        </table>
      </div>
    </div>
  </div>
);

export default Go;
