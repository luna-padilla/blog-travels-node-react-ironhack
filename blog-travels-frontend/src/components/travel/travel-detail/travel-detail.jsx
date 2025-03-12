import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTravelById } from "../../../services/api-service";

function TravelDetail() {
  const { id } = useParams();
  console.log(useParams);
  const [travel, setTravel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTravelById(id)
      .then((data) => {
        setTravel(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar el viaje.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2>{travel.title}</h2>
      <img
        src={travel.image}
        alt={travel.title}
        className="img-fluid rounded"
      />
      <p>{travel.description}</p>
    </div>
  );
}

export default TravelDetail;