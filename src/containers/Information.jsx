import React from 'react';

//styles
import '../styles/components/Information.css';

function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input
              name="name"
              placeholder="Nombre completo"
              type="text"
              required
            />
            <input
              name="email"
              placeholder="Correo electronico"
              type="email"
              required
            />
            <input
              name="address"
              placeholder="Direccion"
              type="text"
              required
            />
            <input name="apto" placeholder="Apto" type="text" required />
            <input name="city" placeholder="Ciudad" type="text" required />
            <input name="country" placeholder="Pais" type="text" required />
            <input name="state" placeholder="Estado" type="text" required />
            <input name="cp" placeholder="Codigo Postal" type="text" required />
            <input name="phone" placeholder="Telefono" type="text" required />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">Pagar</div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Nombre de Item</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
