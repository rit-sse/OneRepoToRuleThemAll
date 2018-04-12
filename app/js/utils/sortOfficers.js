const order = new Map([
  ['President', 0],
  ['Vice President', 1],
  ['Treasurer', 2],
  ['Secretary', 3],
  ['Technology Head', 4],
]);

export function sortPredicate(officerA, officerB) { // eslint-disable-line import/prefer-default-export
  if (order.get(officerA.title) > order.get(officerB.title)) {
    return 1;
  }
  return -1;
}
