import { Link } from "react-router-dom";

function TravelItem({ travel }) {
  console.log(travel);
  const {created_at, title, id} = travel
  const date = new Date(created_at);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formatedDate = date.toLocaleDateString("en-NS", options);

  return (
    <div className="row align-items-center travel-item">
      {/* Imagen con tamaño fijo */}
      <div className="col-md-4">
        <img src={travel.image} alt={title} className="travel-img" />
      </div>

      {/* Contenido con mejor estilización */}
      <div className="col-md-8 d-flex flex-column justify-content-between">
        <div>
          <h3 className="travel-title shadows-into-light-regular">
            {String(title).charAt(0).toUpperCase() +
              String(title).slice(1)}
          </h3>
          <hr style={{ width: "20px", marginLeft: "100px" }} />
          <p>Posted on: {formatedDate}</p>
          <p className="travel-description">
            {travel.description.slice(0, 200)}...
          </p>
        </div>

        {/* Botón alineado a la derecha */}
        <div className="text-end">
          <Link to={`/travels/${id}`} className="btn btn-sm btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TravelItem;