import { Link } from "react-router-dom";

function TravelItem({ travel }) {
  console.log(travel)
  return (
    <div className="travel-item">
      <img src={travel.image} alt={travel.title} style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }} />
      <div>
        <h3>{travel.title}</h3>
        <p>{travel.description.slice(0, 200)}...</p>
        <Link to={`/travels/${travel.id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default TravelItem;