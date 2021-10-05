import { useState } from 'react';

// initial state
import initialState from '../initialState';

function useInitialState() {
  const [state, setState] = useState(initialState);

  // add a product to cart
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  // remove a product to cart
  const removeFromCart = (payload) => {
    const { cart } = state;
    cart.splice(payload, 1);
    setState({
      ...state,
      cart,
    });
  };

  // add a customer
  const addBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addBuyer,
  };
}

export default useInitialState;
