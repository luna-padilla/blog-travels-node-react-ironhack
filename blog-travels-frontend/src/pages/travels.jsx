import React, { useState, useEffect } from "react";
import { getTravels } from "../services/api-service";

function Travels() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await getTravels();
        setTravels(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error al obtener los viajes:", error.response?.data || error.message);
      }
    };
    fetchTravels();
  }, []);

  return (
    <div>
      <h2>Lista de Viajes</h2>
      {travels.length === 0 ? (
        <p>No hay viajes disponibles.</p>
      ) : (
        <ul>
          {travels.map((travel) => (
            <li key={travel._id}>
              {travel.title} - {travel.subtitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Travels;
