import { ActionType } from './actionTypes';

export const updateLocation = () => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.UPDATE_LOCATION
    });
  } catch (error) {
    console.log(error);
  }
};
