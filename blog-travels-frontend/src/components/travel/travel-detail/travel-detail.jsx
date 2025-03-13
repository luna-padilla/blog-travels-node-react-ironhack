import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTravelByIdWithComments, getCommentsByTravel, addComment } from "../../../services/api-service";

function TravelDetail() {
  const { id } = useParams();
  const [travel, setTravel] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener detalles del viaje
    getTravelByIdWithComments(id)
      .then((data) => {
        setTravel(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar el viaje.");
        setLoading(false);
      });

    // Obtener comentarios del viaje
    getCommentsByTravel(id)
      .then(setComments)
      .catch((err) => console.error("Error al cargar comentarios", err));
  }, [id]);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    addComment({ comment: newComment, travel: id })
      .then((comment) => {
        setComments([...comments, comment]); // Agregar el nuevo comentario a la lista
        setNewComment("");
      })
      .catch((err) => console.error("Error al agregar comentario", err));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2>{travel.title}</h2>
      <img src={travel.image} alt={travel.title} className="img-fluid rounded" />
      <p>{travel.description}</p>

      {/* Sección de Comentarios */}
      <div className="mt-4">
        <h4>Comentarios</h4>
        {comments.length > 0 ? (
          <ul className="list-group">
            {comments.map((comment) => (
              <li key={comment.id} className="list-group-item">
                {comment.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay comentarios aún.</p>
        )}

        {/* Agregar nuevo comentario */}
        <div className="mt-3">
          <textarea
            className="form-control"
            rows="3"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escribe un comentario..."
          ></textarea>
          <button className="btn btn-primary mt-2" onClick={handleAddComment}>
            Comentar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TravelDetail;