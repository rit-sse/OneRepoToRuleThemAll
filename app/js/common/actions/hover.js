import { MENTORS, SPECIALTIES } from 'mentoring/actions';

export const HOVER = 'HOVER';
export const UNHOVER = 'UNHOVER';

function hover(hoverType, primaryKey = 'id') {
  return id => ({
    type: HOVER,
    payload: {
      [primaryKey]: id,
      hoverType,
    },
  });
}

export const hoverMentor = hover(MENTORS);

export const hoverSpecialty = hover(SPECIALTIES, 'name');

export function unhover() {
  return {
    type: UNHOVER,
  };
}
