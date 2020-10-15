import { LocationObject } from 'expo-location';

export interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface UserState {
  user: User;
  location: LocationObject;
  error: string | undefined;
}
