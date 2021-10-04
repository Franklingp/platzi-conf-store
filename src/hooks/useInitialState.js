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
  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeToCart,
  };
}

export default useInitialState;
