import  { ACTIONS_TYPES } from './actions_types';

export const loadBurgers = (burgers) => {
  return {
    type: ACTIONS_TYPES.LOAD_BURGERS,
    payload: burgers,
  }
};

export const addBurgersToCart = (burger) => {
  return {
    type: ACTIONS_TYPES.ADD_BURGERS_TO_CART,
    payload: burger,
  }
};

export const clearCart = () => {
  return {
    type: ACTIONS_TYPES.CLEAR_CART
  }
};
