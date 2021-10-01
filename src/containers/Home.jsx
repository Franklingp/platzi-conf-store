import React from 'react';

//copmonents
import Products from '../components/Products';

//initial state
import InitialState from '../initialState';

function Home() {
  return (
    <div className="Home">
      <Products products={InitialState.products} />
    </div>
  );
}

export default Home;
