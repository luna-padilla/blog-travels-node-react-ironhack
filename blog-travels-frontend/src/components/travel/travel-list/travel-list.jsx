import { useEffect, useState } from "react";
import { getTravelsByCategory } from "../../../services/api-service";
import TravelItem from "../travel-item/travel-item";

function TravelList({ category }) {
  const [travels, setTravels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTravelsByCategory(category)
      .then((data) => {
        setTravels(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los viajes.");
        setLoading(false);
      });
  }, [category]); // Se ejecuta cada vez que cambia la categoría

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="row">
      {travels.map((travel) => (
        <div key={travel.id} className="col-md-12">
          <TravelItem travel={travel} />
        </div>
      ))}
    </div>
  );
}

export default TravelList;
