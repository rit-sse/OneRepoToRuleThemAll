import moment from 'moment';

export function adjustTimezone(date) { // eslint-disable-line import/prefer-default-export
  const offset = new Date().getTimezoneOffset() / 60;
  return moment(date).subtract(offset, 'hours');
}
