import { useState, useEffect } from "react";
import { Carousel, Spinner, Alert } from "react-bootstrap";

function AdCarousel() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const categories = ["automotive", "groceries", "mens-watches"]; // Categorías con artículos útiles para viajes
        let allProducts = [];

        for (const category of categories) {
          const res = await fetch(`https://dummyjson.com/products/category/${category}`);
          const data = await res.json();
          allProducts = [...allProducts, ...data.products]; // Acumulamos productos de varias categorías
        }

        // Filtramos por palabras clave relevantes a viajes
        const filteredAds = allProducts.filter((product) =>
          ["bag", "luggage", "camera", "travel", "backpack", "watch"].some((keyword) =>
            product.title.toLowerCase().includes(keyword)
          )
        );

        if (filteredAds.length === 0) throw new Error("No hay anuncios disponibles para viajes.");

        const formattedAds = filteredAds.slice(0, 5).map((product) => ({
          img: product.thumbnail,
          link: `https://dummyjson.com/products/${product.id}`,
          title: product.title,
        }));

        setAds(formattedAds);
      } catch (err) {
        setError(err.message || "Error cargando anuncios");
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (ads.length === 0) return <Alert variant="warning">No hay anuncios disponibles.</Alert>;

  return (
    <Carousel className="mb-4">
      {ads.map((ad, index) => (
        <Carousel.Item key={index}>
          <a href={ad.link} target="_blank" rel="noopener noreferrer">
            <img src={ad.img} alt={ad.title} className="d-block w-100" style={{ maxHeight: "300px", objectFit: "cover" }} />
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
