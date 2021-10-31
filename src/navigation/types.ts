import { IRestaurant, IFoodItem, IOrder } from '../shared/interfaces';

export type AppStackParamList = {
  Welcome: undefined;
  Tab: undefined;
};

export type BottomTabStackParamList = {
  HomeNavigator: undefined;
  Offers: undefined;
  CartNavigator: undefined;
  AccountNavigator: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Search: undefined;
  Restaurant: { restaurant: IRestaurant };
  FoodDetails: { food: IFoodItem };
};

export type CartStackParamList = {
  Cart: undefined;
  Login: undefined;
  Orders: undefined;
  OrderDetails : { order: IOrder };
  Offers: undefined;
};

export type AccountStackParamList = {
  Account: undefined;
  Orders: undefined;
  OrderDetails : { order: IOrder };
};
