import React, { Component, PropTypes } from 'react';

import Weeks from './Weeks';

class ThreeWeek extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  };

  render() {
    return (
      <section className="gtv-container">
        <table>
          <thead>
            <tr>
              <th className="gtv-calendar-weekcol"><h3>Wk</h3></th>
              <th><h3>Sun</h3></th>
              <th><h3>Mon</h3></th>
              <th><h3>Tue</h3></th>
              <th><h3>Wed</h3></th>
              <th><h3>Thu</h3></th>
              <th><h3>Fri</h3></th>
              <th><h3>Sat</h3></th>
            </tr>
          </thead>

          <Weeks weeks={this.props.events} />
        </table>
      </section>
    );
  }
}

export default ThreeWeek;
