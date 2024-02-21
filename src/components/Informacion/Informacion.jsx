import React, { useState } from "react";


const Informacion = () => {
  const [data, setData] = useState(null);
  const URL = import.meta.env.VITE_APP_URL;
  const APIKEY = import.meta.env.VITE_APP_APIKEY;
  const AUTH = import.meta.env.VITE_APP_AUTH;
  
  const getData = async () => {
    console.log(URL,APIKEY,AUTH);
    try {
      const response = await fetch(URL,{
        method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': APIKEY,
                    'Authorization': AUTH, 
      },
    });
      if (!response.ok) {
        throw Error("No se encontraron los datos");
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log("tenemos los datos",jsonData)
    } catch (error) {
        console.error('Error al obtener los datos', error.message);
    }
  };

  return (
    <div>
      <button onClick={getData}>Enviar</button>
      <ul>{data&&(
            data.map((item, index) => (
                <li key={index}>{item.teams}{item.puntos}{item.semana}</li>
            ))
)}
        </ul>
    </div>
  );
};

export default Informacion;
