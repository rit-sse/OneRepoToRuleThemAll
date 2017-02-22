import React from 'react';
import GoLinksList from 'containers/go/GoLinksList';
import 'scss/go.scss';

const Go = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="pull-left">Go Links</h1>
      </div>
    </div>
    <div className="row" style={{width: '100%'}}>
      <div className="col-12">
        <table className="pure-table">
          <thead>
            <tr>
              <th>Shortname</th><th>Link</th>
            </tr>
          </thead>
          <GoLinksList />
        </table>
      </div>
    </div>
  </div>
);

export default Go;
