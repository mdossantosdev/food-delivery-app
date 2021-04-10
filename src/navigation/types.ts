import { IRestaurant, IFoodItem } from '../shared/interfaces';

export type AppStackParamList = {
  Welcome: undefined;
  BottomTab: undefined;
};

export type BottomTabStackParamList = {
  HomeNavigator: undefined;
  Offers: undefined;
  CartNavigator: undefined;
  Account: undefined;
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
};
