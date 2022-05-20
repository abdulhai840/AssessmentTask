import * as ActionTypes from "./actionTypes";

export const setData = (value) => {
    return {
      type: ActionTypes.SET_DATA,
      payload: value,
    };
  };
  export const globalData = (value) => {
    return {
      type: ActionTypes.GLOBAL_DATA,
      payload: value,
    };
  };