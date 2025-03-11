import './footer.css';

function Footer({ className = "" }) {
  return (
    <footer className={`my-footer py-4 ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <h5 className="text-light fw-bold">Contact Us</h5>
            <p className="mb-1">
              Email:{" "}
              <a
                href="mailto:contact@travelblog.com"
                className="text-light text-decoration-none"
              >
                contact@travelblog.com
              </a>
            </p>
            <p className="mb-1">Phone: +1 555-123-4567</p>
            <p>Address: 123 Travel Street, Global City</p>
          </div>

          <div className="col-md-4 text-center">
            <h5 className="text-light fw-bold">Explore</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/categories" className="text-light text-decoration-none">
                  Travel Categories
                </a>
              </li>
              <li>
                <a href="/community" className="text-light text-decoration-none">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-center">
            <h5 className="text-light fw-bold">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/privacy" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-light text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-light text-decoration-none">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="text-light">
            &copy; {new Date().getFullYear()} Travel Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;