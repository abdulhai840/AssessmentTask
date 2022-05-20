import * as ActionTypes from "../actionTypes";

export const globalData = (
  state = { globalData :{}
    },
  action
) => {
  switch (action.type) {
      case ActionTypes.GLOBAL_DATA:
      return {...state ,...action.payload}
    default:
      return state;
  }
};
