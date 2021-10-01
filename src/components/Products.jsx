import React from 'react';

//styles
import '../styles/components/Products.css';

//components
import Product from './Product';

function Products({ products }) {
  return (
    <div className="Products-items">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
