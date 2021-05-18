import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';
import { IUser, IFoodItem, ILocationGeocode, IOrder, IOffer } from '../../shared/interfaces';

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

export const login = (email: string, password: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.post<IUser>(`${BASE_URL}/user/login`, { email, password });

    if (!response) {
      dispatch({
        type: ActionType.USER_ERROR,
        payload: 'Login Error'
      });
    }

    dispatch({
      type: ActionType.LOGIN,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};

export const register = (email: string, phone: string, password: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.post<IUser>(`${BASE_URL}/user/register`, { email, phone, password });

    if (!response) {
      dispatch({
        type: ActionType.USER_ERROR,
        payload: 'Register Error'
      });
    }

    dispatch({
      type: ActionType.REGISTER,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};

export const verifyOtp = (otp: string, user: IUser): AppThunkAction => async (dispatch) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

    const response = await axios.patch<IUser>(`${BASE_URL}/user/verify`, { otp });

    if (!response) {
      dispatch({
        type: ActionType.USER_ERROR,
        payload: 'OTP Verification Error'
      });
    }

    dispatch({
      type: ActionType.LOGIN,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};

export const otpRequest = (user: IUser): AppThunkAction => async (dispatch) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

    const response = await axios.get<IUser>(`${BASE_URL}/user/otp`);

    if (!response) {
      dispatch({
        type: ActionType.USER_ERROR,
        payload: 'OTP Request Error'
      });
    }

    dispatch({
      type: ActionType.LOGIN,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};

export const createOrder = (cartItems: IFoodItem[], user: IUser): AppThunkAction => async (dispatch) => {
  try {
    let cart = new Array();

    cartItems.map(item => {
      cart.push({ _id: item._id, quantity: item.quantity });
    })

    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

    const response = await axios.post<IOrder>(`${BASE_URL}/user/create-order`, { cart });

    if (!response) {
      dispatch({
        type: ActionType.USER_ERROR,
        payload: 'Create Order Error'
      });
    }

    dispatch({
      type: ActionType.CREATE_ORDER,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};

export const getOrders = (user: IUser): AppThunkAction => async (dispatch) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

    const response = await axios.get<IOrder[]>(`${BASE_URL}/user/orders`);

    if (!response) {
      dispatch({
        type: ActionType.USER_ERROR,
        payload: 'Get Orders Error'
      });
    }

    dispatch({
      type: ActionType.GET_ORDERS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};

export const cancelOrder = (order: IOrder, user: IUser): AppThunkAction => async (dispatch) => {
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

    const response = await axios.patch<IOrder[]>(`${BASE_URL}/user/order/${order._id}`);

    if (!response) {
      dispatch({
        type: ActionType.USER_ERROR,
        payload: 'Cancel Order Error'
      });
    }

    dispatch({
      type: ActionType.CANCEL_ORDER,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};

export const logout = (): AppThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.LOGOUT,
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};

export const addOffer = (offer: IOffer): AppThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.ADD_OFFER,
      payload: offer
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};

export const removeOffer = (offer: IOffer): AppThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.REMOVE_OFFER,
      payload: offer
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_ERROR,
      payload: error
    });
  }
};
