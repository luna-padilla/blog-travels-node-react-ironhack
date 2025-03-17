import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";
import { updateUser, destroySession } from "../services/api-service";
import { Modal, Button, Form } from "react-bootstrap";

function ProfilePage() {
  const { user, logout, updateUserContext } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
  });

  if (!user) {
    return <p>Loading profile...</p>;
  }

  const handleInputChange = (e) => {
    setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const { password, ...updatedData } = editedProfile;
    if (password) updatedData.password = password;

    updateUser(updatedData)
      .then(() => {
        setSuccess("Profile updated successfully!");
        updateUserContext(updatedData); // Actualiza el usuario en el contexto
        setIsEditing(false);
      })
      .catch((err) => setError(err.message || "Error updating profile"));
  };

  const handleLogout = () => {
    destroySession()
      .then(() => {
        logout();
        navigate("/");
      })
      .catch((err) => setError(err.message || "Error logging out"));
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      updateUser({ active: false })
        .then(() => {
          destroySession();
          logout();
          navigate("/");

        })
        .catch((err) => setError(err.message || "Error deleting account"));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2>Profile</h2>
              <img
                src={user.avatar || "https://via.placeholder.com/150"}
                alt="Profile Avatar"
                className="rounded-circle mb-3"
                style={{ width: "120px", height: "120px" }}
              />
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <div className="mt-3">
                <Button variant="warning " onClick={() => setIsEditing(true)}>
                  Edit Profile
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={handleDeleteAccount}
                  disabled
                >
                  Delete Account
                </Button>
                <Button
                  variant="secondary"
                  className="ms-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
              {error && <p className="text-danger mt-3">{error}</p>}
              {success && <p className="text-success mt-3">{success}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Modal para edición de perfil */}
      <Modal show={isEditing} onHide={() => setIsEditing(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateProfile}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editedProfile.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editedProfile.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={editedProfile.password}
                onChange={handleInputChange}
                placeholder="Leave blank to keep current password"
              />
            </Form.Group>
            <div className="text-end">
              <Button variant="secondary" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" className="ms-2">
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProfilePage;
