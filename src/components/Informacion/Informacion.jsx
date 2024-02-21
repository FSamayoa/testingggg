import React, { useState } from "react";

const Informacion = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch("https://ntiirqazzpdwwxqffxss.supabase.co/rest/v1/equipos?select=*",{
        method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aWlycWF6enBkd3d4cWZmeHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NTIwODYsImV4cCI6MjAyNDAyODA4Nn0.mr1JQe6gdgS6Fq5zz53DGXn7Hs8WQuz3RIi7rZTxi0k', // Reemplaza con tu clave de API de Supabase
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aWlycWF6enBkd3d4cWZmeHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NTIwODYsImV4cCI6MjAyNDAyODA4Nn0.mr1JQe6gdgS6Fq5zz53DGXn7Hs8WQuz3RIi7rZTxi0k`, // Reemplaza con tu clave de API de Supabase
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
