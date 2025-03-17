import { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";

function TravelAds() {
  const [ads, setAds] = useState([]);
  const [currentAd, setCurrentAd] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAds() {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=5"); // Fake Store API
        const data = await response.json();
        
        // Filtrar para evitar imágenes vacías
        const filteredAds = data.filter((item) => item.image);
        setAds(filteredAds);
      } catch (error) {
        console.error("Error fetching ads:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAds();
  }, []);

  const nextAd = () => {
    setCurrentAd((prev) => (prev + 1) % ads.length);
  };

  if (loading) {
    return <Spinner animation="border" className="d-block mx-auto mt-3" />;
  }

  return (
    <div className="mt-4">
      <h5 className="text-center">🌍 Sponsored Travel Ads</h5>
      {ads.length > 0 && (
        <Card className="text-center shadow-sm">
          <Card.Img
            variant="top"
            src={ads[currentAd]?.image}
            alt="Ad Image"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{ads[currentAd]?.title}</Card.Title>
            <Card.Text>{ads[currentAd]?.price} USD</Card.Text>
            <Button variant="primary" style={{backgroundColor:'#8ED1DA', border:'none'}} href={ads[currentAd]?.url} target="_blank">
              View Deal
            </Button>
          </Card.Body>
        </Card>
      )}
      <Button variant="secondary" className="w-100 mt-2" onClick={nextAd}>
        Next Ad
      </Button>
    </div>
  );
}

export default TravelAds;