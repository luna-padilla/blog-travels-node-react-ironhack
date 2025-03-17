// import { Link } from "react-router-dom";
// import { useAuthContext } from "../../../contexts/auth-context";

// function Navbar() {
//   const { user, logout } = useAuthContext();
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           TravelBlog
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#main-nav"
//           aria-controls="main-nav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="main-nav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             {user?.role === "admin" && (
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   to="/travel"
//                 >
//                   Create Travel
//                 </Link>
//               </li>
//             )}
//           </ul>
//           <ul className="navbar-nav">
//             {user ? (
//               <>
//                 <div className="dropdown">
//                   <button
//                     className="btn  dropdown-toggle"
//                     type="button"
//                     id="dropdownMenu2"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     <Link
//                       className="nav-link"
//                       aria-current="page"
//                       to="/profile"
//                     >
//                       Hello {user.name.split(" ")[0]}
//                     </Link>
//                   </button>
//                   <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
//                     <li>
//                       <button className="dropdown-item" type="button">
//                         <Link
//                           className="nav-link"
//                           aria-current="page"
//                           to="/profile"
//                         >
//                           Profile
//                         </Link>
//                       </button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" type="button">
//                         <Link
//                           className="nav-link"
//                           aria-current="page"
//                           to="/my-travels"
//                         >
//                           My travels
//                         </Link>
//                       </button>
//                     </li>
//                     <li>
//                       <button
//                         className="dropdown-item"
//                         onClick={() => logout()}
//                       >
//                         <Link className="nav-link" aria-current="page" to="/">
//                           Logout
//                         </Link>
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" aria-current="page" to="/login">
//                     Log in
//                   </Link>
//                 </li>
//                 <li className="nav-item sign-up">
//                   <Link className="nav-link" aria-current="page" to="/register">
//                     Sign up
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { Link } from "react-router-dom";
import { FaHome, FaUser, FaPlane, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaBars } from "react-icons/fa";

function Navbar({ user, logout }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          <FaPlane className="me-2 text-primary" />
          TravelBlog
        </Link>

        {/* Botón para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        {/* Menú principal */}
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <FaHome className="me-1" /> Home
              </Link>
            </li>
            {user?.role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/travel">
                  <FaPlane className="me-1" /> Create Travel
                </Link>
              </li>
            )}
          </ul>

          {/* Menú de usuario */}
          <ul className="navbar-nav">
            {user ? (
              <li className="nav-item dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUser className="me-1" /> Hello {user.name.split(" ")[0]}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <FaUser className="me-1" /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/my-travels">
                      <FaPlane className="me-1" /> My Travels
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logout}>
                      <FaSignOutAlt className="me-1 text-danger" /> Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <FaSignInAlt className="me-1" /> Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary text-white px-3" to="/register">
                    <FaUserPlus className="me-1" /> Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
