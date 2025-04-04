import { Card, ListGroup, Button, Badge, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useAuthContext } from "../../../contexts/auth-context";
import SearchBar from "../search-bar/search-bar";
import AdCarousel from "../ads/ad-carousel";
import TravelAds from "../ads/travel-ads";

function Sidebar() {
  //   const { user } = useAuthContext();
  const tags = [
    "Adventure",
    "Beach",
    "Mountain",
    "Cities",
    "Culture",
    "Gastronomy",
    "Nature",
    "Ecotourism",
    "Rural Tourism",
    "Hiking",
    "Camping",
    "Cruises",
    "Safari",
    "History",
    "Architecture",
    "Backpacking",
    "Photography",
    "Luxury",
    "Islands",
    "Desert",
    "Skiing",
];

  return (
    <div className="col-md-3">
      {/* Perfil del usuario */}
      {/* {user && (
        <Card className="mb-4">
          <Card.Body className="text-center">
            <img
              src={user.avatar || "https://via.placeholder.com/100"}
              alt="Avatar"
              className="rounded-circle mb-2"
              style={{ width: "80px", height: "80px" }}
            />
            <Card.Title>{user.name}</Card.Title>
            <Button variant="primary" as={Link} to="/profile">
              Ver perfil
            </Button>
          </Card.Body>
        </Card>
      )} */}

      {/* Búsqueda */}
      <div className="container">
        <SearchBar />
      </div>

      {/* Categorías */}
      <Card className="mb-4">
        <Card.Header>Categories</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item as={Link} to="/category/playa">
            Beach
          </ListGroup.Item>
          <ListGroup.Item as={Link} to="/category/montaña">
            Mountain
          </ListGroup.Item>
          <ListGroup.Item as={Link} to="/category/ciudades">
            Cities
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {/* Viajes recientes */}
      <Card className="mb-4">
        <Card.Header>Most popular</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item as={Link} to="/travels/1">
            Alpine Adventure
          </ListGroup.Item>
          <ListGroup.Item as={Link} to="/travels/2">
            Discovering Tokyo
          </ListGroup.Item>
          <ListGroup.Item as={Link} to="/travels/3">
            Kenyan Safari
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {/* Redes sociales */}
      <Card className="mb-4">
        <Card.Header>Follow us</Card.Header>
        <Card.Body className="text-center">
          <Button variant="outline-primary" className="me-2">
            Facebook
          </Button>
          <Button variant="outline-info" className="me-2">
            Twitter
          </Button>
          <Button variant="outline-danger">Instagram</Button>
        </Card.Body>
      </Card>

      <TravelAds></TravelAds>
      <Card className="mt-5 p-2">
        <Card.Header>Popular tags</Card.Header>
        <Card.Body>
          {tags.map((tag, index) => (
            <Link key={index} to={`/tag/${tag.toLowerCase()}`} className="m-2">
              <Badge bg="secondary" className="p-3 m-2">
                {tag}
              </Badge>
            </Link>
          ))}
        </Card.Body>
      </Card>

      <div className="mt-5">
        <AdCarousel />
      </div>
    </div>
  );
}

export default Sidebar;
