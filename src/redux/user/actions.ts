import AsyncStorage from '@react-native-community/async-storage';
import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';
import { IFoodItem, ILocationGeocode } from '../../shared/interfaces';

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

export const addToCart = (item: IFoodItem): AppThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: item
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};

export const removeFromCart = (item: IFoodItem): AppThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.REMOVE_FROM_CART,
      payload: item
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};
