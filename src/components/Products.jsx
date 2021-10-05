import React, { useContext } from 'react';

//styles
import '../styles/components/Products.css';

//components
import Product from './Product';

//context
import AppContext from '../context/AppContext';

function Products() {
  const { state, addToCart } = useContext(AppContext);

  return (
    <div className="Products-items">
      {state.products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;
