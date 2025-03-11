// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../contexts/auth-context';
// import { updateUser, destroySession } from '../services/api-service'; // Importa las funciones necesarias

// function ProfilePage() {
//   const { user, logout } = useAuthContext();
//   const navigate = useNavigate();
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState({ ...user }); // Inicializar con los datos del usuario
  
//   if (!user) {
//     return <p>Loading profile...</p>;
//   }
  
//   const handleInputChange = (e) => {
//     setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
//   };

//   const handleUpdateProfile = () => {
//     updateUser(editedProfile)
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
//     // Implementa la lógica para cambiar contraseña/email aquí
//     // Puedes abrir un modal o redirigir a una página de edición
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
//                   src={user.avatar}
//                   alt="Profile Avatar"
//                   className="rounded-circle"
//                   style={{ width: '150px', height: '150px' }}
//                 />
//               </div>
//               <p><strong>Name:</strong> {user.name}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//               {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
//               {user.location && <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>}
//               {user.social && (
//                 <div>
//                   <strong>Social:</strong>
//                   <ul>
//                     {user.social.instagram && <li>Instagram: <a href={user.social.instagram}>Link</a></li>}
//                     {user.social.twitter && <li>Twitter: <a href={user.social.twitter}>Link</a></li>}
//                     {user.social.facebook && <li>Facebook: <a href={user.social.facebook}>Link</a></li>}
//                     {user.social.website && <li>Website: <a href={user.social.website}>Link</a></li>}
//                   </ul>
//                 </div>
//               )}
//               {user.travelInterests && <p><strong>Travel Interests:</strong> {user.travelInterests.join(', ')}</p>}
//               {user.languages && <p><strong>Languages:</strong> {user.languages.join(', ')}</p>}

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
//     </div>
//   );
// }

// export default ProfilePage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth-context';
import { updateUser, destroySession } from '../services/api-service';

function ProfilePage() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(user);

  const [editedProfile, setEditedProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    password: '',
  });

  if (!user) {
    return <p>Loading profile...</p>;
  }

  const handleInputChange = (e) => {
    setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = () => {
    const { password, ...updatedData } = editedProfile;
    if (password) {
      updatedData.password = password;
    }
    updateUser(updatedData)
      .then((res) => {
        setProfile(res.data);
        setIsEditing(false);
      })
      .catch((err) => setError(err.message || 'Error updating profile'));
  };

  const handleLogout = () => {
    destroySession()
      .then(() => {
        logout();
        navigate('/');
      })
      .catch((err) => setError(err.message || 'Error logging out'));
  };

  const handleChangePasswordEmail = () => {
    alert('Change password/email functionality not implemented yet.');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      updateUser({ active: false })
        .then(() => {
          destroySession();
          logout();
          navigate('/');
        })
        .catch((err) => setError(err.message || 'Error deleting account'));
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Profile</h2>
              <div className="text-center mb-4">
                <img
                  src={profile?.avatar}
                  alt="Profile Avatar"
                  className="rounded-circle"
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              <p><strong>Name:</strong> {profile?.name}</p>
              <p><strong>Email:</strong> {profile?.email}</p>
              {profile?.bio && <p><strong>Bio:</strong> {profile?.bio}</p>}
              {profile?.location && <p><strong>Location:</strong> {profile?.location.city}, {profile?.location.country}</p>}
              {profile?.social && (
                <div>
                  <strong>Social:</strong>
                  <ul>
                    {profile?.social.instagram && <li>Instagram: <a href={profile?.social.instagram}>Link</a></li>}
                    {profile?.social.twitter && <li>Twitter: <a href={profile?.social.twitter}>Link</a></li>}
                    {profile?.social.facebook && <li>Facebook: <a href={profile?.social.facebook}>Link</a></li>}
                    {profile?.social.website && <li>Website: <a href={profile?.social.website}>Link</a></li>}
                  </ul>
                </div>
              )}
              {profile?.travelInterests && <p><strong>Travel Interests:</strong> {profile?.travelInterests.join(', ')}</p>}
              {profile?.languages && <p><strong>Languages:</strong> {profile?.languages.join(', ')}</p>}

              <div className="mt-3">
                <button className="btn btn-warning me-2" onClick={handleChangePasswordEmail}>
                  Change Password/Email
                </button>
                <button className="btn btn-danger me-2" onClick={handleDeleteAccount}>
                  Delete Account
                </button>
                <button className="btn btn-secondary" onClick={handleLogout}>
                  Logout
                </button>
              </div>
              {error && <p className="text-danger mt-3">{error}</p>}
            </div>
          </div>
        </div>
      </div>
      {isEditing ? (
        <form onSubmit={handleUpdateProfile}>
          <input type="text" name="name" value={editedProfile.name} onChange={handleInputChange} placeholder="Name" />
          <input type="email" name="email" value={editedProfile.email} onChange={handleInputChange} placeholder="Email" />
          <input type="password" name="password" value={editedProfile.password} onChange={handleInputChange} placeholder="Password (leave blank to keep current)" />
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;