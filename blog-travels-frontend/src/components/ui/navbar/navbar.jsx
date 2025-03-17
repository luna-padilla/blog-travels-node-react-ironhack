import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaPlane,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaMapMarkedAlt,
  FaLightbulb,
  FaSuitcaseRolling,
} from "react-icons/fa";

import { useAuthContext } from "../../../contexts/auth-context";

function Navbar() {
  const { user, logout } = useAuthContext();
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        {/* <Link className="navbar-brand fw-bold" to="/">
          <FaPlane className="me-1 text-primary" />
          TravelBlog
        </Link> */}
        {/* <Link className="navbar-brand fw-bold" to="/">
          <img
            src="/images/Diseño sin título.png"
            alt="TravelBlog Logo"
            className="me-1" // Puedes ajustar el margen aquí
            style={{ width: "30px", height: "30px" }} // Ajusta el tamaño aquí
          />
          TravelBlog
        </Link> */}
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

            <li className="nav-item">
              <Link className="nav-link" to="/destinations">
                <FaMapMarkedAlt className="me-1" /> Popular Destinations
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/travel-tips">
                <FaLightbulb className="me-1" /> Travel Tips
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/gear">
                <FaSuitcaseRolling className="me-1" /> Luggage Recommendations
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
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                >
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
                  <Link className="nav-link btn text-white px-3" to="/register">
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
