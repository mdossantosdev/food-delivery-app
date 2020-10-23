export interface IUser {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface IUserState {
  user: IUser;
  location: ILocationGeocode;
  error: string | undefined;
}

export interface ICategory {
  id: number;
  title: string;
  icon: string;
}

export interface IFoodItem {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  readyTime: number;
  images: string[];
}

export interface IRestaurant {
  _id: string;
  name: string;
  foodType: string;
  address: string;
  phone: string;
  images: string[];
  foods: IFoodItem[];
}

export interface IFoodAvailability {
  categories: [ICategory];
  restaurants: [IRestaurant];
  foods: [IFoodItem];
}

export interface IShopState {
  availability: IFoodAvailability;
  error: string | undefined;
}

export interface ILocationGeocode {
  city: string | null;
  country: string | null;
  district: string | null;
  isoCountryCode: string | null;
  name: string | null;
  postalCode: string | null;
  region: string | null;
  street: string | null;
  subregion: string | null;
  timezone: string | null;
}
