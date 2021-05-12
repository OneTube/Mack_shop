import  { ACTIONS_TYPES } from './actions_types';

const initialState = {
  burgers: [],
  cart: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case ACTIONS_TYPES.LOAD_BURGERS:
      return {
        ...state,
        burgers: action.payload
      };

    case ACTIONS_TYPES.ADD_BURGERS_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case ACTIONS_TYPES.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
