function Footer({ className = "" }) {
  return (
    <footer className={`footer bg-white py-4 ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
        
          <div className="col-md-4 text-center">
            <h5 className="text-danger fw-bold">Contact</h5>
            <p className="mb-1">Address: Calle del Libro, 42, 28013 Madrid</p>
            <p className="mb-1">Phone: +34 987 654 321</p>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@ironbookshop.com"
                className="text-danger text-decoration-none"
              >
                contact@ironbookshop.com
              </a>
            </p>
          </div>

          <div className="col-md-4 text-center">
            <h5 className="text-danger fw-bold">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-muted text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="text-muted text-decoration-none"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-center">
            <h5 className="text-danger fw-bold">Legal Information</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/legal-notice"
                  className="text-muted text-decoration-none"
                >
                  Legal Notice
                </a>
              </li>
              <li>
                <a
                  href="/shipping-information"
                  className="text-muted text-decoration-none"
                >
                  Shipping Information
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-muted text-decoration-none"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="text-muted">
            &copy; {new Date().getFullYear()} Iron Bookshop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
