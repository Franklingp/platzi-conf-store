import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//styles
import '../styles/components/Information.css';

//context
import AppCotext from '../context/AppContext';

//utils
import getTotalAmount from '../utils/getTotalAmount';

function Information() {
  const { addBuyer, state } = useContext(AppCotext);
  const { cart } = state;
  const history = useHistory();

  //handle form
  const { register, handleSubmit } = useForm();

  //handle form submit
  const onSubmit = (buyerData) => {
    addBuyer(buyerData);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form id="customer-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              placeholder="Nombre completo"
              type="text"
              {...register('name', { required: true })}
            />
            <input
              name="email"
              placeholder="Correo electronico"
              type="email"
              {...register('email', { required: true })}
            />
            <input
              name="address"
              placeholder="Direccion"
              type="text"
              {...register('address', { required: true })}
            />
            <input
              name="apto"
              placeholder="Apto"
              type="text"
              {...register('apto', { required: true })}
            />
            <input
              name="city"
              placeholder="Ciudad"
              type="text"
              {...register('city', { required: true })}
            />
            <input
              name="country"
              placeholder="Pais"
              type="text"
              {...register('country', { required: true })}
            />
            <input
              name="state"
              placeholder="Estado"
              type="text"
              {...register('state', { required: true })}
            />
            <input
              name="cp"
              placeholder="Codigo Postal"
              type="number"
              {...register('cp', { required: true, valueAsNumber: true })}
            />
            <input
              name="phone"
              placeholder="Telefono"
              type="number"
              {...register('phone', { required: true, valueAsNumber: true })}
            />
            <input
              name="submit"
              placeholder="submit"
              valur="submit"
              type="submit"
            />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back" onClick={() => history.goBack()}>
            Regresar
          </div>
          <div className="Information-next">
            <button type="submit" form="customer-form">
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map(({ price, title, id }, index) => (
          <div className="Information-item" key={`${id} - ${index}`}>
            <div className="Information-element">
              <h4>{title}</h4>
              <span>{`$${price}`}</span>
            </div>
          </div>
        ))}
        <div className="Information-element-total">
          <h3>Total</h3>
          <span>{`$${getTotalAmount(cart)}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Information;
