import React from 'react';
import GoLinksList from 'containers/go/GoLinksList';
import 'scss/go.scss';

const style = {
  name: {
    width: '20%',
  },
  link: {
    width: '80%',
  },
};

const Go = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="pull-left">Go Links</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <table className="go-table go-table-striped">
          <thead>
            <tr>
              <th style={style.name}>Shortname</th>
              <th style={style.link}>Link</th>
            </tr>
          </thead>
          <GoLinksList />
        </table>
      </div>
    </div>
  </div>
);

export default Go;
