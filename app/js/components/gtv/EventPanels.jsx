import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class EventPanels extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
    getEvents: PropTypes.func.isRequired,
  };

  static isOneDay(event) {
    return moment(event.startDate).isSame(moment(event.endDate), 'day');
  }

  static fullStartDay(event) {
    return moment(event.startDate).format('dddd, MMMM D');
  }

  static timeRange(event) {
    return `${moment(event.startDate).format('h:mm a')} to ${moment(event.endDate).format('h:mm a')}`;
  }

  static startDay(event) {
    return `${moment(event.startDate).format('MMMM D')}, ${moment(event.startDate).format('h:mm a')}`;
  }

  static endDay(event) {
    return `${moment(event.endDate).format('MMMM D')}, ${moment(event.endDate).format('h:mm a')}`;
  }

  constructor() {
    super();

    this.renderInner = this.renderInner.bind(this);
  }

  handleVisible() {
    this.props.getEvents();
  }

  renderInner(event) {
    if (this.isOneDay(event)) {
      return (
        <div>
          <div className="gtv-event-data">
            <span>{ this.fullStartDay(event) }</span>
          </div>
          <div className="gtv-event-data">
            <span>{ this.timeRange(event) }</span>
          </div>
          <div className="gtv-event-data faded">
            <span>{ event.location }</span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="gtv-event-data">
          <span>{ this.startDay(event) } to</span>
        </div>
        <div className="gtv-event-data">
          <span>{ this.endDay(event) }</span>
        </div>
        <div className="gtv-event-data faded">
          <span>{ event.location }</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="container">
        <div className="gtv-event-header">
          <h3>Upcoming Events</h3>
        </div>
        { this.props.events.map((eventSet, i) => {
          return (
            <div
              key={`wrapper${i}`} // eslint-disable-line react/no-array-index-key
              id={`wrapper${i}`}
              className="gtv-panel-wrapper"
            >
              <div className="gtv-event-panel">
                { eventSet.map((event, j) => {
                  return (
                    <div className="gtv-event" id={`event-${i}-${j}`} key={`event-${event.id}`}>
                      <div className="gtv-event-title">
                        { event.name }
                      </div>
                      { this.renderInner(event) }
                    </div>
                  );
                }) }
              </div>
            </div>
          );
        }) }
      </section>
    );
  }
}

export default EventPanels;
