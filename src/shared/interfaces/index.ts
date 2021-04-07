export interface IUser {
  email: string;
  password: string;
  phone: string;
  token: string;
  verified: boolean;
}

export interface IUserState {
  user: IUser;
  location: ILocationGeocode;
  cart: IFoodItem[];
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
  quantity: number;
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

export interface IOrder {
  _id: string;
  orderId: string;
  items: [];
  totalAmount: number;
  orderDate: number;
  paidThrough: string;
  paymentResponse: string;
  orderStatus: string;
}

export interface IFoodAvailability {
  categories: ICategory[];
  restaurants: IRestaurant[];
  foods: IFoodItem[];
}

export interface IShopState {
  availability: IFoodAvailability;
  availableFoods: IFoodItem[];
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
