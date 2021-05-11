import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';
import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';
import { IOffer } from '../../shared/interfaces';

export const availabilityByPostCode = (postalCode: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/food/availability/${postalCode}`);

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

export const foodSearchByPostCode = (postalCode: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/food/search/${postalCode}`);

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

export const getOffers = (postalCode: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get<IOffer[]>(`${BASE_URL}/offers/${postalCode}`);

    if (!response) {
      dispatch({
        type: ActionType.SHOP_ERROR,
        payload: 'Offer availability error'
      });
    }

    dispatch({
      type: ActionType.OFFER_SEARCH,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.SHOP_ERROR,
      payload: error
    });
  }
};
