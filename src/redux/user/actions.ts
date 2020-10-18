import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';
import { LocationGeocode } from '../../shared/interfaces';

export const updateLocation = (location: LocationGeocode[]): AppThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.UPDATE_LOCATION,
      payload: location
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    })
  }
};
