import { ACTIVE_LINK_FALSE, ACTTIVE_LINK_TRUE } from './NavbarActionTypes';

const initalState = {
  isActive: null,
};

export const NavbarReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTIVE_LINK_FALSE:
      return {
        ...state,
        isActive: false,
      };
    case ACTTIVE_LINK_TRUE:
      return {
        ...state,
        isActive: true,
      };
    default:
      return state;
  }
};
