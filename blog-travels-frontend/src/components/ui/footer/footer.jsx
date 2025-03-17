import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer({ className = "" }) {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual

  return (
    <footer className={`text-center ${className} my-footer`}>
      <div className="container p-4">
        {/* Redes Sociales */}
        <section className="mb-4">
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
            aria-label="Google"
          >
            <FaGoogle />
          </a>
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="btn btn-outline btn-floating m-1"
            href="#!"
            role="button"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </section>

        {/* Formulario de Newsletter */}
        <section>
          <form action="#">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="newsletterEmail"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Texto descriptivo */}
        <section className="mb-4">
          <p>
            Join our travel community and discover breathtaking destinations,
            travel tips, and unique experiences. Explore the world with us!
          </p>
        </section>

        {/* Enlaces útiles */}
        <section>
          <div className="row">
            {/* Destinos Populares */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Popular Destinations</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" href="#!">
                    Bali, Indonesia
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Santorini, Greece
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Kyoto, Japan
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Patagonia, Argentina
                  </a>
                </li>
              </ul>
            </div>

            {/* Consejos de Viaje */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Travel Tips</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" href="#!">
                    Packing Essentials
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Budget-Friendly Trips
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Safety Guidelines
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Best Travel Apps
                  </a>
                </li>
              </ul>
            </div>

            {/* Comunidad */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Community</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" href="#!">
                    Meet Other Travelers
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Share Your Experience
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Join Local Events
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Photo Contests
                  </a>
                </li>
              </ul>
            </div>

            {/* Soporte y Contacto */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Support</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-body" href="#!">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-body" href="#!">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Copyright con el año actualizado */}
      <div className="text-center p-3 copyright">
        © {currentYear} Copyright:
        <a className="text-reset fw-bold" href="https://travelblog.com/">
          TravelBlog.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
