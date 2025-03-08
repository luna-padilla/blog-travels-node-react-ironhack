import { useEffect, useState } from "react";
import { getTravelById } from "../../../services/api-service";

function TravelDetail({ id }) {
  const [travel, setTravel] = useState();

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await getTravelById(id);
        setTravel(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(
          "Error al obtener los viajes:",
          error.response?.data || error.message
        );
      }
    };
    fetchTravels();
  }, [id]);

  if (!travel) {
    return null;
  } else {
    return <>{travel.title}</>;
  }
}

export default TravelDetail;
