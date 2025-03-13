import { Link } from "react-router-dom";

function TravelItem({ travel }) {
  console.log(travel);
  return (
    <div className="row align-items-center travel-item">
      {/* Imagen con tamaño fijo */}
      <div className="col-md-4">
        <img src={travel.image} alt={travel.title} className="travel-img" />
      </div>

      {/* Contenido con mejor estilización */}
      <div className="col-md-8 d-flex flex-column justify-content-between">
        <div>
          <h3 className="travel-title">{travel.title}</h3>
          <p className="travel-description">
            {travel.description.slice(0, 200)}...
          </p>
        </div>

        {/* Botón alineado a la derecha */}
        <div className="text-end">
          <Link to={`/travels/${travel.id}`} className="btn btn-sm btn-primary">
            Leer más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TravelItem;