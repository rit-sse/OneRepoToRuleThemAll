import { MENTORS } from './mentors';
import { SPECIALTIES } from './specialties';

export const HOVER = 'HOVER';
export const UNHOVER = 'UNHOVER';

function hover(hoverType, primaryKey = 'id') {
  return (id) => {
    return {
      type: HOVER,
      payload: {
        [primaryKey]: id,
        hoverType,
      },
    };
  };
}

export const hoverMentor = hover(MENTORS);

export const hoverSpecialty = hover(SPECIALTIES, 'name');

export function unhover() {
  return {
    type: UNHOVER,
  };
}
