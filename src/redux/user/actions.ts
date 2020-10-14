import { LocationObject } from 'expo-location';
import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';

export const updateLocation = (location: LocationObject): AppThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.UPDATE_LOCATION,
      payload: location
    });
  } catch (err) {
    console.log(err);
  }
};
