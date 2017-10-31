export const OPEN_NAV = 'OPEN_NAV';
export const CLOSE_NAV = 'CLOSE_NAV';

export function openNav() {
  return {
    type: OPEN_NAV,
  };
}

export function closeNav() {
  return {
    type: CLOSE_NAV,
  };
}

export function toggleNav() {
  return (dispatch, getState) => {
    const opened = getState().nav;
    if (opened) return dispatch(closeNav());
    return dispatch(openNav());
  };
}
