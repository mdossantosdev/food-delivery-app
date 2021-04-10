import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';
import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';

export const availabilityByPostCode = (postCode: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/food/availability/${postCode}`);

    if (!response) {
      dispatch({
        type: ActionType.SHOP_ERROR,
        payload: 'Availability error'
      });
    }

    dispatch({
      type: ActionType.AVAILABILITY,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.SHOP_ERROR,
      payload: error
    });
  }
};

export const foodSearchByPostCode = (postCode: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/food/search/${postCode}`);

    if (!response) {
      dispatch({
        type: ActionType.SHOP_ERROR,
        payload: 'Availability error'
      });
    }

    dispatch({
      type: ActionType.FOOD_SEARCH,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.SHOP_ERROR,
      payload: error
    });
  }
};
