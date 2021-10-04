import React, { useContext } from 'react';

//copmonents
import Products from '../components/Products';

//context
import AppContext from '../context/AppContext';

function Home() {
  const { state, addToCart } = useContext(AppContext);

  return (
    <div className="Home">
      <Products products={state.products} addToCart={addToCart} />
    </div>
  );
}

export default Home;
