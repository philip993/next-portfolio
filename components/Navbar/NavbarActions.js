import { ACTIVE_LINK_FALSE, ACTTIVE_LINK_TRUE } from './NavbarActionTypes';

export const setActiveTrue = () => {
  return {
    type: ACTTIVE_LINK_TRUE,
  };
};

export const setActiveFalse = () => {
  return {
    type: ACTIVE_LINK_FALSE,
  };
};
