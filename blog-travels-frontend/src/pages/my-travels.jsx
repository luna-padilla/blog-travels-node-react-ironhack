import { useEffect, useState } from "react";
import { getUserTravels, deleteTravel } from "../services/api-service";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context"; // Importa el contexto de autenticación

export default function MyTravels() {
  const { user } = useAuthContext(); // Obtiene el usuario autenticado
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    if (user) {
      getUserTravels(user.id)
        .then((data) => {
          setTravels(data);
        })
        .catch((error) => console.error("Error fetching user travels", error));
    }
  }, [user]); // Se ejecuta cuando `user` cambia

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this travel?")) {
      deleteTravel(id).then(() => {
        setTravels((prev) => prev.filter((travel) => travel.id !== id));
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2>My Travels</h2>
      <Link to="/travels/new" className="btn btn-primary mb-3">
        + Create Travel
      </Link>
      <div className="list-group">
        {travels.map((travel) => (
          <div
            key={travel.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{travel.title}</span>
            <div>
              <Link
                to={`/travels/edit/${travel.id}`}
                className="btn btn-warning btn-sm me-2"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(travel.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}