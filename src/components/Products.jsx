import React from 'react';

//styles
import '../styles/components/Products.css';

//components
import Product from './Product';

function Products({ products, addToCart }) {
  return (
    <div className="Products-items">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Products;
