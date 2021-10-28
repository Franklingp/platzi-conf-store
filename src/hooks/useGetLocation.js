import { useState, useEffect } from 'react';
import axios from 'axios';

/*

address
:
"direccion"
apto
:
"apto 15"
city
:
"david"
country
:
"panama"
cp
:
"0426"
email
:
"franklin@piemtenl"
name
:
"Franklin"
phone
:
"64991311"
state
:
*/

function useGetLocation(user) {
    const { city, state, country } = user;
    const [location, setLocation] = useState(null);
    const addressFormat = String(`${city},%${state},%${country}`).replace(
        / /g,
        '%'
    );

    // api call to get the location from a free api
    const getLocation = async () => {
        try {
            const response = await axios.get(
                `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITION_STACK}&query=${addressFormat}&limit=1&output=json`
            );
            if (response.data.data.length > 0) {
                setLocation([
                    Number(response.data.data[0].latitude),
                    Number(response.data.data[0].longitude),
                ]);
            } else {
                setLocation(null);
                window.alert("No se ha podido encontrar la direccion. Atencion al cliente se comunicara contigo para obtener mas información.")
            }
        } catch (error) {
            window.alert('Hubo un error al intentar obtener la ubicacion.');
            console.log(error);
            setLocation(null);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return location;
}

export default useGetLocation;
