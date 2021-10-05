import React, { useContext, useRef } from 'react';

//styles
import '../styles/components/Information.css';

//context
import AppCotext from '../context/AppContext';

function Information({ history }) {
  const { addBuyer, state } = useContext(AppCotext);
  const { cart } = state;
  const form = useRef(null);

  //handle form submit
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addBuyer(buyer);
  };

  //handle total
  const handleTotal = () => {
    const reducer = (acumulator, currentProduct) =>
      acumulator + currentProduct.price;
    return cart.reduce(reducer, 0);
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
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
          <div className="Information-back" onClick={() => history.goBack()}>
            Regresar
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(({ price, title, id }) => (
          <div className="Information-item" key={`${id} - ${title}`}>
            <div className="Information-element">
              <h4>{title}</h4>
              <span>{`$${price}`}</span>
            </div>
          </div>
        ))}
        <div className="Information-element-total">
          <h3>Total</h3>
          <span>{`$${handleTotal()}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Information;
