import AsyncStorage from '@react-native-community/async-storage';
import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';
import { LocationGeocode } from '../../shared/interfaces';

export const updateLocation = (location: LocationGeocode): AppThunkAction => async (dispatch) => {
  try {
    const jsonValue = JSON.stringify(location);
    await AsyncStorage.setItem('@user_location', jsonValue);

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
