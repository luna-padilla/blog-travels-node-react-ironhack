import { Link } from "react-router-dom";
import PageLayout from "../../layouts/page-layout/page-layout";
import { useAuthContext } from "../../../contexts/auth-context";

function Navbar() {
  const { user, logout } = useAuthContext;
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <PageLayout>
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <li className="nav-item dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle"></i> {user.name} {/* Muestra el nombre del usuario si está disponible */}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Gestionar cuenta
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logout}>
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-primary me-2" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary" to="/register">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </PageLayout>
    </nav>
  );
}

export default Navbar;