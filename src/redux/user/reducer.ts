import { ActionType } from './actionTypes';
import { UserAction } from './types';
import { IUser, IUserState, ILocationGeocode, IOffer } from '../../shared/interfaces';

const initialState: IUserState = {
  user: {} as IUser,
  location: {} as ILocationGeocode,
  cart: [],
  orders: [],
  offer: {} as IOffer,
  error: undefined,
}

export const userReducer = (state = initialState, action: UserAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.UPDATE_LOCATION:
      return {
        ...state,
        location: payload,
      };
    case ActionType.LOGIN:
    case ActionType.REGISTER:
      return {
        ...state,
        user: payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        user: {} as IUser,
      }
    case ActionType.ADD_TO_CART:
      const existingItem = state.cart.find((item) => item._id === payload._id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === existingItem._id
              ? { ...existingItem, quantity: existingItem.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: 1 }],
      };
    case ActionType.REMOVE_FROM_CART:
      const existingCartItem = state.cart.find((item) => item._id === payload._id);

      if (existingCartItem) {
        if (existingCartItem.quantity === 1) {
          return {
            ...state,
            cart: state.cart.filter((item) => item._id !== existingCartItem._id)
          }
        }

        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === existingCartItem._id
              ? { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
              : item
          )
        };
      }
    case ActionType.CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, payload],
        cart: [],
      };
    case ActionType.GET_ORDERS:
    case ActionType.CANCEL_ORDER:
      return {
        ...state,
        orders: payload,
      }
    case ActionType.ADD_OFFER:
      return {
        ...state,
        offer: payload,
      };
    case ActionType.REMOVE_OFFER:
      return {
        ...state,
        offer: {} as IOffer,
      };
    case ActionType.USER_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
