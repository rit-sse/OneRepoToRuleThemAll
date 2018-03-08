import React from 'react';
import UserList from 'members/containers/UserList';

const Members = () => (
  <div className="row">
    <div className="offset-sm-2 col-sm-8 offset-md-3 col-md-6">
      <table className="table" style={{ border: '1px solid #dee2e6' }}>
        <thead>
          <tr>
            <th>Member</th>
            <th>DCE</th>
          </tr>
        </thead>
        <UserList wrapper="tbody" />
      </table>
    </div>
  </div>
);

export default Members;
