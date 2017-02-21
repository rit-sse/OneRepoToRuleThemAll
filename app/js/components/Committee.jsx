import React from 'react';
import { Link, Route } from 'react-router-dom';
import 'scss/committees.scss';

const Committee = props => (
  <Route
    exact
    path={`/events/${props.name}`}
    children={({ match }) => ( // eslint-disable-line
      <div className={match ? 'committee active' : 'committee'}>
        <Link to={`/events/${props.name}`}>{props.name === '' ? 'All' : props.name}</Link>
      </div>
    )}
  />
);

Committee.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Committee;
