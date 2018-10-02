import moment from 'moment';
import * as yup from 'yup';

// Validates another date field is after this date field
// eg.
//   startDate: yup.date(),
//   endDate: yup.date().isAfter(yup.ref('startDate'), 'End Date must come after Start Date'),
yup.addMethod(yup.date, 'isAfter', function isAfter(ref, msg) { // Can't use arrow function because we rely on 'this' referencing yup's internals
  return this.test({
    name: 'isAfter',
    exclusive: true, // Validation errors don't stack
    // NOTE: Intentional use of single quotes - yup will handle the string interpolation
    // 'path' - yup provides this; key associated w/ yup schema
    // 'reference' - defined in params
    message: msg || '${path} must come after ${reference}', // eslint-disable-line no-template-curly-in-string
    params: {
      reference: ref.path,
    },
    test(value) {
      return moment(value).isAfter(this.resolve(ref));
    },
  });
});

yup.addMethod(yup.date, 'isFuture', function isFuture(msg) {
  return this.test({
    name: 'isFuture',
    exclusive: true, // Validation errors don't stack
    // NOTE: Intentional use of single quotes - yup will handle the string interpolation
    // 'path' - yup provides this; key associated w/ yup schema
    message: msg || '${path} must be in the future', // eslint-disable-line no-template-curly-in-string
    test(value) {
      return moment(value).isAfter(moment());
    },
  });
});

export default yup;
