import { LocationObject } from 'expo-location';

export interface User {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface UserState {
  user: User;
  location: LocationObject;
  error: string | undefined;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
}

export interface FoodItem {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  readyTime: number;
  images: [string];
}

export interface Restaurant {
  _id: string;
  name: string;
  foodType: string;
  address: string;
  phone: string;
  images: string;
  foods: [FoodItem];
}

export interface FoodAvailability {
  categories: [Category];
  restaurants: [Restaurant];
  foods: [FoodItem];
}

export interface ShopState {
  availability: FoodAvailability;
}
