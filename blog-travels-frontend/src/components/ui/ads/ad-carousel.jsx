import { useState, useEffect } from "react";
import { Carousel, Spinner, Alert } from "react-bootstrap";

function AdCarousel() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5") // API pública de prueba
      .then((res) => res.json())
      .then((data) => {
        const formattedAds = data.products.map((product) => ({
          img: product.thumbnail,
          link: `https://dummyjson.com/products/${product.id}`,
          title: product.title,
        }));
        setAds(formattedAds);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error loading ads", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Carousel className="mb-4">
      {ads.map((ad, index) => (
        <Carousel.Item key={index}>
          <a href={ad.link} target="_blank" rel="noopener noreferrer">
            <img src={ad.img} alt={ad.title} className="d-block w-100" />
          </a>
          <Carousel.Caption>
            <h5>{ad.title}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default AdCarousel;