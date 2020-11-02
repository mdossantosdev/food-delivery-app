import AsyncStorage from '@react-native-community/async-storage';
import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';
import { ILocationGeocode, IFoodItem } from '../../shared/interfaces';

export const updateLocation = (location: ILocationGeocode): AppThunkAction => async (dispatch) => {
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
    });
  }
};

export const updateCart = (item: IFoodItem): AppThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.UPDATE_CART,
      payload: item
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};
