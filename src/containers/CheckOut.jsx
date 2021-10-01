import React from 'react';

//styles
import '../styles/components/Checkout.css';

function CheckOut() {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de compra:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
          <button type="button">Eliminar</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total: $10</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </div>
  );
}

export default CheckOut;