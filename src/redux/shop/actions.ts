import axios from 'axios';
import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';

export const availabilityByPostCode = (postCode: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get(`URL${postCode}`);

    if (!response) {
      dispatch({
        type: ActionType.SHOP_ERROR,
        payload: 'Availability error'
      })
    }

    dispatch({
      type: ActionType.AVAILABILITY,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: ActionType.SHOP_ERROR,
      payload: error
    })
  }
};
