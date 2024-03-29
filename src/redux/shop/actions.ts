import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';
import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';
import { IOffer, ICategory } from '../../shared/interfaces';

export const getTopRestaurants = (postalCode: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/shop/top-restaurants/${postalCode}`);

    if (!response) {
      dispatch({
        type: ActionType.SHOP_ERROR,
        payload: 'Availability error'
      });
    }

    dispatch({
      type: ActionType.TOP_RESTAURANTS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.SHOP_ERROR,
      payload: error
    });
  }
};

export const getFoodsIn30Min = (postalCode: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/shop/foods30min/${postalCode}`);

    if (!response) {
      dispatch({
        type: ActionType.SHOP_ERROR,
        payload: 'Availability error'
      });
    }

    dispatch({
      type: ActionType.FOODS_30MIN,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.SHOP_ERROR,
      payload: error
    });
  }
};

export const foodSearch = (postalCode: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/shop/search/${postalCode}`);

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
    const response = await axios.get<IOffer[]>(`${BASE_URL}/shop/offers/${postalCode}`);

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

export const getCategories = (): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get<ICategory[]>(`${BASE_URL}/shop/categories`);

    if (!response) {
      dispatch({
        type: ActionType.SHOP_ERROR,
        payload: 'Offer availability error'
      });
    }

    dispatch({
      type: ActionType.CATEGORIES,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.SHOP_ERROR,
      payload: error
    });
  }
};
