import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MemberList from 'scoreboard/containers/MembersList';


export default class MembershipList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedType: 'MEMBERS',
    };
  }

  render() {
    const displaying = this.state.displayedType;
    return (
      <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <span
              style={{ cursor: 'pointer' }}
              className={`nav-link ${displaying === 'MEMBERS' ? 'active' : ''}`}
              onClick={() => this.setState({ displayedType: 'MEMBERS' })}
            >
                Members
            </span>
          </li>
          <li className="nav-item">
            <span
              style={{ cursor: 'pointer' }}
              className={`nav-link ${displaying === 'OFFICERS' ? 'active' : ''}`}
              onClick={() => this.setState({ displayedType: 'OFFICERS' })}
            >
              Officers
            </span>
          </li>
        </ul>
        <table className="table" style={{ border: '1px solid #dee2e6' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Member</th>
              <th>Score</th>
            </tr>
          </thead>
          <MemberList wrapper="tbody" displayedType={displaying} />
        </table>
      </div>
    );
  }
}
