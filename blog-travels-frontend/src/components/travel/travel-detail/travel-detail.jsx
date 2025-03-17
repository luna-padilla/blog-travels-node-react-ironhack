import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/auth-context"; // Importamos el contexto
import {
  getTravelByIdWithComments,
  getCommentsByTravel,
  addComment,
} from "../../../services/api-service";

function TravelDetail() {
  const { id } = useParams();
  const { user } = useAuthContext(); // Obtenemos el usuario autenticado
  const navigate = useNavigate();
  const [travel, setTravel] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTravelByIdWithComments(id)
      .then((data) => {
        setTravel(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar el viaje.");
        setLoading(false);
      });

    getCommentsByTravel(id)
      .then(setComments)
      .catch((err) => console.error("Error al cargar comentarios", err));
  }, [id]);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    addComment({ comment: newComment, travel: id, createdBy: user.id })
      .then((comment) => {
        setComments([...comments, { ...comment, createdBy: user }]); // Agregar el usuario autenticado al comentario
        setNewComment("");
      })
      .catch((err) => console.error("Error al agregar comentario", err));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container travel-detail mt-5">
      <h2 className="text-primary fw-bold text-center mb-4 shadows-into-light-regular">
        {" "}
        {String(travel.title).charAt(0).toUpperCase() +
          String(travel.title).slice(1)}
      </h2>

      <div className="row align-items-center">
        <div className="col-md-12 mb-5">
          <img
            src={travel.image}
            alt={travel.title}
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="col-md-12 travel-description">
          <p className="fs-5 text-muted">{travel.description}</p>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <h4 className="fw-bold"></h4>
        <div className="p-3">
          {comments.length > 0 ? (
            <ul className="list-group list-group-flush">
              {comments.map((comment) => (
                <li
                  key={comment.id}
                  className="list-group-item d-flex align-items-center p-5 mb-3 rounded shadow-sm"
                >
                  <img
                    src={
                      comment.createdBy?.avatar ||
                      "https://via.placeholder.com/40"
                    }
                    alt={comment.createdBy?.name || "Usuario"}
                    className="rounded-circle me-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <p className="mb-1 fw-semibold">
                      {comment.createdBy?.name || "Usuario Anónimo"}
                    </p>
                    <p className="text-muted">{comment.comment}</p>
                    <button className="rounded border p-1">Reply</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No hay comentarios aún.</p>
          )}

          {/* Bloque de agregar comentario */}
          {user ? (
            <div className="mt-3">
              <textarea
                className="form-control shadow-sm p-3"
                rows="3"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
              ></textarea>
              <div className="d-flex justify-content-end mt-2">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleAddComment}
                >
                  Comment 💬
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center mt-3">
              <p className="text-muted">You must log in to comment.</p>
              <button
                className="btn  btn-primary btn-sm"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelDetail;
