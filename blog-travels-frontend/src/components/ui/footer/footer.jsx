import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer({ className = "" }) {
  return (
    <footer className={`my-footer py-4 ${className}`}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          
          {/* Contacto */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="text-light fw-bold">Contact Us</h5>
            <p className="mb-1">
              <FaEnvelope className="me-2" />
              <a href="mailto:contact@travelblog.com" className="text-light text-decoration-none">
                contact@travelblog.com
              </a>
            </p>
            <p className="mb-1">
              <FaPhone className="me-2" /> +1 555-123-4567
            </p>
            <p>123 Travel Street, Global City</p>
          </div>

          {/* Explorar */}
          <div className="col-md-4 text-center">
            <h5 className="text-light fw-bold">Explore</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/categories" className="footer-link">Travel Categories</a></li>
              <li><a href="/community" className="footer-link">Community Guidelines</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="text-light fw-bold">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
              <li><a href="/cookies" className="footer-link">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="text-center mt-4">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
        </div>

        {/* Derechos reservados */}
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