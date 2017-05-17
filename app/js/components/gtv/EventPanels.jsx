import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Event from './EventPanelEvent';

class EventPanels extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  };

  render() {
    return (
      <section className="gtv-container">
        <div className="gtv-event-header">
          <h3>Upcoming Events</h3>
        </div>
        {this.props.events.map((eventSet, i) => (
          <div
            key={`wrapper${i}`}
            id={`wrapper${i}`}
            className="gtv-panel-wrapper"
          >
            <div className="gtv-event-panel">
              {eventSet.map((event, j) => (
                <div className="gtv-event" id={`event-${i}-${j}`} key={`event-${event.id}`}>
                  <div className="gtv-event-title">
                    {event.name}
                  </div>
                  <Event event={event} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default EventPanels;
