import React from 'react';
import Status from 'common/containers/Status';
import Login from 'common/containers/Login';
import MentorList from 'mentoring/containers/MentorList';
import SpecialtyList from 'mentoring/containers/SpecialtyList';
import MentorModal from 'mentoring/containers/AddMentorForm';
import MentoringSchedule from 'mentoring/containers/MentoringSchedule';

import { MENTORS, SHIFTS, SPECIALTIES } from 'mentoring/actions';

const Mentoring = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h2 className="pull-left">Mentoring</h2>
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
    <div className="row">
      <div className="col">
        <MentoringSchedule />
      </div>
    </div>
    <MentorModal />
  </div>
);

export default Mentoring;
