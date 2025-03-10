import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { profile as userProfile , destroySession, updateUser } from "../services/api-service";

function ProfilePage() {
  const { user, logout } = useAuthContext();
  const [profile, setProfile] = useState(user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    userProfile()
      .then((res) => {
        setProfile(res);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los datos del perfil.");
        setLoading(false);
      });
  }, []);

  const handleUpdate = () => {
    const updatedData = { name: "Nuevo Nombre" }; // Aquí pondrías los valores editados
    updateUser(updatedData)
      .then((res) => setProfile(res.data))
      .catch(() => setError("Error al actualizar el perfil"));
  };

  const handleDeleteAccount = () => {
    updateUser({ active: false }) // Simulación de eliminar cuenta
      .then(() => {
        destroySession();
        logout();
        navigate("/");
      })
      .catch(() => setError("Error al eliminar la cuenta"));
  };

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2>Perfil de {profile?.name}</h2>
      <p>
        <strong>Email:</strong> {profile?.email}
      </p>
      <p>
        <strong>Rol:</strong> {profile?.role}
      </p>

      <div className="mt-3">
        <button className="btn btn-warning me-2" onClick={handleUpdate}>
          Editar Perfil
        </button>
        <button className="btn btn-danger" onClick={handleDeleteAccount}>
          Eliminar Cuenta
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
