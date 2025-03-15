import { Link } from "react-router-dom";

import { getUser } from "../../../services/api-service";
import { useEffect, useState } from "react";

function TravelItem({ travel }) {
  const [user, setUser] = useState();
  const { created_at, title, id, description, image, createdBy } = travel;
  const route = `/travels/${id}`;
  const shortDescription = description.slice(0, 140);
  const titleToUpperCase =
    String(title).charAt(0).toUpperCase() + String(title).slice(1);
  const date = new Date(created_at);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formatedDate = date.toLocaleDateString("en-NS", options);

  useEffect(() => {
    getUser(createdBy)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, [createdBy]);

  return (
    <div className="row align-items-center travel-item">
      <div className="col-md-12">
        <img src={image} alt={title} className="travel-img" />
      </div>

      <div className="col-md-12 d-flex flex-column justify-content-between">
        <div className="d-flex flex-column">
          <h3 className="travel-title shadows-into-light-regular text-center mt-4">
            {titleToUpperCase}
          </h3>
          <hr style={{ width: "60px", marginLeft: "280px" }} />
          <p>Posted on: {formatedDate}</p>
          <p>Created by: {user ? user.name : "Unknown"}</p>
          <p className="travel-description">{shortDescription}...</p>
        </div>

        <div className="text-end">
          <Link to={route} className="btn btn-sm btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TravelItem;
