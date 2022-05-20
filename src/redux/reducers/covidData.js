import * as ActionTypes from "../actionTypes";

export const covidData = (
  state = {
    data: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return { ...state, ...action.payload }
    default:
      return state;
  }
};
