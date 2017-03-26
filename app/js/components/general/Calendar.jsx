import React, { Component, PropTypes } from 'react';
import BigCalendar, { setLocalizer, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

setLocalizer(momentLocalizer(moment));

class Calendar extends Component {
  static propTypes = {
    getEvents: PropTypes.func,
  };

  static defaultProps = {
    getEvents: () => {},
  };

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return <BigCalendar {...this.props} />;
  }
}

export default Calendar;
