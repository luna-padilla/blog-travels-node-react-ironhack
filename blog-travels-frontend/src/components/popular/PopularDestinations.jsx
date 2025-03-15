import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PopularDestinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Lorem Picsum no tiene imágenes específicas de ciudades, pero podemos simularlo
        const fetchedDestinations = Array.from({ length: 3 }).map((_, index) => ({
          id: index + 1,
          name: `Destino ${index + 1}`,
          image: `https://picsum.photos/300/200?random=${index + 1}`, // Imagen aleatoria
        }));

        setDestinations(fetchedDestinations);
      } catch (error) {
        console.error("Error fetching popular destinations", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="popular-destinations p-3 rounded">
      <h5 className="text-center fw-bold mb-3">🌍 Popular Destinations</h5>
      {destinations.length === 0 ? (
        <p className="text-center">Cargando destinos...</p>
      ) : (
        destinations.map((destination) => (
          <Link key={destination.id} to={`/travels/${destination.id}`} className="text-decoration-none">
            <div className="card mb-2 shadow-sm">
              <img src={destination.image} className="card-img-top" alt={destination.name} />
              <div className="card-body p-2 text-center">
                <h6 className="card-title text-dark">{destination.name}</h6>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default PopularDestinations;
