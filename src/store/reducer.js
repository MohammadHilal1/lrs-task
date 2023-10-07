import { collapseMenu } from "./actions";
import { actionTypes } from "./actions.types";

const initialState = {
  collapseMenu: false,
};

const reducer = (state = initialState, action = {}) => {
  const { type, payLoad } = action;

  switch (type) {
    case actionTypes.COLLAPSE_MENU:
      return {
        ...state,
        collapseMenu: !state.collapseMenu,
      };

    default:
      return state;
  }
};

export default reducer;
