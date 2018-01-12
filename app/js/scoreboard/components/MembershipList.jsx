import React from 'react';
import MemberList from 'scoreboard/containers/MembersList';

const MembershipList = () => (
  <div className="offset-sm-1 col-sm-10 offset-md-2 col-md-8">
    <table className="table" style={{ border: '1px solid #dee2e6' }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Member</th>
          <th>Score</th>
        </tr>
      </thead>
      <MemberList wrapper="tbody" />
    </table>
  </div>
);

export default MembershipList;
