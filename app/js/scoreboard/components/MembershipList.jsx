import React, { Component } from 'react';

import MemberList from 'scoreboard/containers/MembersList';

export default class MembershipList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaying: 'MEMBERS',
    };
  }

  render() {
    const {
      displaying,
    } = this.state;

    return (
      <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <span
              style={{ cursor: 'pointer' }}
              className={`nav-link ${displaying === 'MEMBERS' ? 'active' : ''}`}
              onClick={() => this.setState({ displaying: 'MEMBERS' })}
              role="tab"
            >
                Members
            </span>
          </li>
          <li className="nav-item">
            <span
              style={{ cursor: 'pointer' }}
              className={`nav-link ${displaying === 'OFFICERS' ? 'active' : ''}`}
              onClick={() => this.setState({ displaying: 'OFFICERS' })}
              role="tab"
            >
              Officers
            </span>
          </li>
        </ul>
        <table className="table" style={{ border: '1px solid #dee2e6' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>{displaying === 'MEMBERS' ? 'Member' : 'Officer'}</th>
              <th>Score</th>
            </tr>
          </thead>
          <MemberList wrapper="tbody" displaying={displaying} />
        </table>
      </div>
    );
  }
}
