import React from 'react';
import MemberList from 'containers/scoreboard/MembersList';

const Scoreboard = () => (
  <div>
    <div className="row">
      <div className="col-12 text-center">
        <h4>High Score</h4>
      </div>
    </div>
    <div className="row">
      <div className="offset-1 col-10 offset-md-2 col-md-8">
        <table className="table table-striped table-bordered">
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
    </div>
  </div>
);

export default Scoreboard;
