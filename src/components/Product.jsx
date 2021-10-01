import React from 'react';

function Product({ image, title, price, description }) {
  return (
    <div className="Products-item">
      <img src={image} alt={title} />
      <div className="Products-item-info">
        <h2>
          {title} $<span>{price}</span>
        </h2>
        <p>{description}</p>
        <button type="button">Comprar</button>
      </div>
    </div>
  );
}

export default Product;
