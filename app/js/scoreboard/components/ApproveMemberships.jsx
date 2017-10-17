import React from 'react';
import Memberships from 'containers/scoreboard/ApproveMemberships';

const ApproveMemberships = () => (
  <table className="table">
    <thead>
      <tr>
        <th>DCE</th>
        <th>Name</th>
        <th>Reason</th>
        <th>Committee</th>
        <th>Actions</th>
      </tr>
    </thead>
    <Memberships wrapper="tbody" />
  </table>
);

export default ApproveMemberships;
