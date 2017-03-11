import React from 'react';
import Status from 'containers/general/Status';
import Login from 'containers/general/Login';
import MentorList from 'containers/mentoring/MentorList';
import SpecialtyList from 'containers/mentoring/SpecialtyList';
import MentorModal from 'containers/mentoring/AddMentorForm';

import { MENTORS } from 'actions/mentors';
import { SHIFTS } from 'actions/shifts';
import { SPECIALTIES } from 'actions/specialties';

const Mentoring = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="pull-left">Mentoring</h1>
        <div className="btn-group pull-right" style={{ marginTop: '5px' }} role="group" aria-label="Login Button">
          <Login className="btn btn-sse" />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Status type={[MENTORS, SHIFTS, SPECIALTIES]} message />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <MentorList />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <SpecialtyList />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Status type={[MENTORS, SHIFTS, SPECIALTIES]} spinner />
      </div>
    </div>
    <MentorModal />
  </div>
);

export default Mentoring;
