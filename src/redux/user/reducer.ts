import { ActionType } from './actionTypes';
import { UserAction } from './types';
import { IUser, IUserState, ILocationGeocode, IFoodItem } from '../../shared/interfaces';

const initialState: IUserState = {
  user: {} as IUser,
  location: {} as ILocationGeocode,
  cart: {} as [IFoodItem],
  error: undefined,
}

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case ActionType.UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case ActionType.UPDATE_CART:
      if (!Array.isArray(state.cart)) {
        return {
          ...state,
          cart: [action.payload],
        };
      }

      const cart = state.cart.filter((item) => item._id === action.payload._id);

      if (cart.length > 0) {
        const updateCart = state.cart.map((item) => {
          if (item._id === action.payload._id) {
            item.quantity = action.payload.quantity;
          }
          return item;
        })

        return {
          ...state,
          cart: updateCart.filter((item) => item.quantity > 0),
        };
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ActionType.USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
