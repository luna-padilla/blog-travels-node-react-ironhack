import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addTravel, getTravelById, updateTravel } from "../../../services/api-service";

export default function TravelForm() {
  const { id } = useParams(); // Si hay ID, es edición
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ image: "", title: "", subtitle: "", description: "" });

  useEffect(() => {
    if (id) {
      getTravelById(id).then(setFormData).catch((err) => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = id ? updateTravel(id, formData) : addTravel(formData);
    action.then(() => navigate("/my-travels")).catch((err) => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit Travel" : "Create Travel"}</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
        <input className="form-control mb-2" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <input className="form-control mb-2" name="subtitle" value={formData.subtitle} onChange={handleChange} placeholder="Subtitle" />
        <textarea className="form-control mb-2" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <button type="submit" className="btn btn-success">{id ? "Update Travel" : "Create Travel"}</button>
      </form>
    </div>
  );
}
