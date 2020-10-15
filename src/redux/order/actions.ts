import axios from 'axios';
import { ActionType } from './actionTypes';
import { AppThunkAction } from '../store';

export const availability = (postCode: string): AppThunkAction => async (dispatch) => {
  try {
    const response = await axios.get(`URL${postCode}`);

    if (!response) {
      dispatch({
        type: ActionType.ORDER_ERROR,
        payload: 'Availability error'
      })
    }

    dispatch({
      type: ActionType.AVAILABILITY,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: ActionType.ORDER_ERROR,
      payload: error
    })
  }
};
