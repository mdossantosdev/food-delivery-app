import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';

export const updateLocation = (): AppThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.UPDATE_LOCATION
    });
  } catch (error) {
    console.log(error);
  }
};
