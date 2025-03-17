// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../contexts/auth-context';
// import { updateUser, destroySession } from '../services/api-service';

// function ProfilePage() {
//   const { user, logout } = useAuthContext();
//   const navigate = useNavigate();
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState(user);

//   const [editedProfile, setEditedProfile] = useState({
//     name: user?.name || '',
//     email: user?.email || '',
//     password: '',
//   });
//   if (!user) {
//     return <p>Loading profile...</p>;
//   }

//   const handleInputChange = (e) => {
//     setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
//   };

//   const handleUpdateProfile = () => {
//     const { password, ...updatedData } = editedProfile;
//     if (password) {
//       updatedData.password = password;
//     }
//     updateUser(updatedData)
//       .then((res) => {
//         setProfile(res.data);
//         setIsEditing(false);
//       })
//       .catch((err) => setError(err.message || 'Error updating profile'));
//   };

//   const handleLogout = () => {
//     destroySession()
//       .then(() => {
//         logout();
//         navigate('/');
//       })
//       .catch((err) => setError(err.message || 'Error logging out'));
//   };

//   const handleChangePasswordEmail = () => {
//     alert('Change password/email functionality not implemented yet.');
//   };

//   const handleDeleteAccount = () => {
//     if (window.confirm('Are you sure you want to delete your account?')) {
//       updateUser({ active: false })
//         .then(() => {
//           destroySession();
//           logout();
//           navigate('/');
//         })
//         .catch((err) => setError(err.message || 'Error deleting account'));
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title">Profile</h2>
//               <div className="text-center mb-4">
//                 <img
//                   src={profile?.avatar}
//                   alt="Profile Avatar"
//                   className="rounded-circle"
//                   style={{ width: '150px', height: '150px' }}
//                 />
//               </div>
//               <p><strong>Name:</strong> {profile?.name}</p>
//               <p><strong>Email:</strong> {profile?.email}</p>
//               {profile?.bio && <p><strong>Bio:</strong> {profile?.bio}</p>}
//               {profile?.location && <p><strong>Location:</strong> {profile?.location.city}, {profile?.location.country}</p>}
//               {profile?.social && (
//                 <div>
//                   <strong>Social:</strong>
//                   <ul>
//                     {profile?.social.instagram && <li>Instagram: <a href={profile?.social.instagram}>Link</a></li>}
//                     {profile?.social.twitter && <li>Twitter: <a href={profile?.social.twitter}>Link</a></li>}
//                     {profile?.social.facebook && <li>Facebook: <a href={profile?.social.facebook}>Link</a></li>}
//                     {profile?.social.website && <li>Website: <a href={profile?.social.website}>Link</a></li>}
//                   </ul>
//                 </div>
//               )}
//               {profile?.travelInterests && <p><strong>Travel Interests:</strong> {profile?.travelInterests.join(', ')}</p>}
//               {profile?.languages && <p><strong>Languages:</strong> {profile?.languages.join(', ')}</p>}

//               <div className="mt-3">
//                 <button className="btn btn-warning me-2" onClick={handleChangePasswordEmail}>
//                   Change Password/Email
//                 </button>
//                 <button className="btn btn-danger me-2" onClick={handleDeleteAccount}>
//                   Delete Account
//                 </button>
//                 <button className="btn btn-secondary" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </div>
//               {error && <p className="text-danger mt-3">{error}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isEditing ? (
//         <form onSubmit={handleUpdateProfile}>
//           <input type="text" name="name" value={editedProfile.name} onChange={handleInputChange} placeholder="Name" />
//           <input type="email" name="email" value={editedProfile.email} onChange={handleInputChange} placeholder="Email" />
//           <input type="password" name="password" value={editedProfile.password} onChange={handleInputChange} placeholder="Password (leave blank to keep current)" />
//           <button type="submit">Save Changes</button>
//           <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
//         </form>
//       ) : (
//         <div>
//           <button onClick={() => setIsEditing(true)}>Edit Profile</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";
import { updateUser, destroySession } from "../services/api-service";
import { Modal, Button, Form } from "react-bootstrap";

function ProfilePage() {
  const { user, logout } = useAuthContext();
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
      .then((res) => {
        setSuccess("Profile updated successfully!");
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
                style={{ width: "150px", height: "150px" }}
              />
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>

              <div className="mt-3">
                <Button variant="warning" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </Button>
                <Button variant="danger" className="ms-2" onClick={handleDeleteAccount}>
                  Delete Account
                </Button>
                <Button variant="secondary" className="ms-2" onClick={handleLogout}>
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
      <Modal show={isEditing} onHide={() => setIsEditing(false)}>
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
            <Button type="submit" variant="primary">Save Changes</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProfilePage;
