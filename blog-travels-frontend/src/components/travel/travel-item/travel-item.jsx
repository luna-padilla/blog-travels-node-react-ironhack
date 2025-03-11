import { Link } from "react-router-dom";

function TravelItem({ travel }) {
  return (
    <div className="card travel-item">
      <img src={travel.image} alt={travel.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{travel.title}</h5>
        <p className="card-text">{travel.description.slice(0, 100)}...</p>
        <Link to={`/travels/${travel.id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default TravelItem;
