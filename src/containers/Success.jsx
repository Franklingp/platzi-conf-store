import React, { useContext } from 'react';

//context
import AppContext from '../context/AppContext';

//styles
import '../styles/components/Success.css';

//components
import Map from '../components/Map';

//hooks
import useGetLocation from '../hooks/useGetLocation';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGetLocation(buyer);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer.name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu ubicación:</span>
        <div className="Success-map">
          <Map location={location} customer={buyer} />
        </div>
      </div>
    </div>
  );
}

export default Success;
