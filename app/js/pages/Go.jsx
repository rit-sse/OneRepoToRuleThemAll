import React from 'react';
import GoLinksList from 'containers/go/GoLinksList';
import Status from 'containers/general/Status';
import { GO } from 'actions/go';
import Login from 'containers/general/Login';
import 'scss/go.scss';
import Layout from 'components/general/Layout';

const style = {
  name: {
    width: '20%',
  },
  link: {
    width: '80%',
  },
};

const Go = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="pull-left">Go Links</h1>
          <div className="btn-group pull-right" style={{ marginTop: '5px' }} role="group" aria-label="Basic example">
            <Login className="btn btn-sse" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="go-table go-table-striped">
              <thead>
                <tr>
                  <th style={style.name}>ShortName</th>
                  <th style={style.link}>Link</th>
                </tr>
              </thead>
              <GoLinksList />
            </table>
            <Status type={[GO]} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Go;
