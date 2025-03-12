import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/auth-context";

function Navbar() {
  const { user, logout } = useAuthContext();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Blog mis viajes
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {user?.role === "admin" && (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/travel"
                >
                  Create Travel
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav">
            {user ? (
              <>
                <div className="dropdown">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/profile"
                    >
                      Hello {user.name.split(" ")[0]}
                    </Link>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button className="dropdown-item" type="button">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          to="/profile"
                        >
                          Profile
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          to="/my-travels"
                        >
                          My travels
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => logout()}
                      >
                        <Link className="nav-link" aria-current="page" to="/">
                          Logout
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/login">
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/register">
                    Sign up
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
