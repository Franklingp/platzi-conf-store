import React from 'react';

//styles
import '../styles/components/Success.css';

function Success() {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Franklin, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
}

export default Success;
