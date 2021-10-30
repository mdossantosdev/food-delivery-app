import { IFoodItem } from '../shared/interfaces';

export const checkExistence = (item: IFoodItem, cart: IFoodItem[]) => {
  if(Array.isArray(cart)) {
    let currentItem = cart.filter((cartItem) => cartItem._id === item._id )
    if(currentItem.length > 0) {
      return currentItem[0];
    }
  }
  return item;
};

export const countItems = (cart: IFoodItem[]): number => {
  const totalItems = cart.reduce((accumulator: number, item: IFoodItem) => {
    if (item.quantity) return accumulator + item.quantity;

    return accumulator;
  }, 0)

  return totalItems;
};
