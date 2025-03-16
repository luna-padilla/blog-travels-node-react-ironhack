// react
import { useEffect, useState } from "react";
import { getTravelsByCategory } from "../../../services/api-service";
import TravelItem from "../travel-item/travel-item";

function TravelList({ category }) {
  const [travels, setTravels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    getTravelsByCategory(category, page)
      .then((data) => {
        
        setTravels(data.travels);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los viajes.");
        setLoading(false);
      });
  }, [category, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="row">
        {travels.map((travel) => (
          <div key={travel.id} className="col-md-6 p-4">
            <TravelItem travel={travel} />
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-lg justify-content-center">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={(e) => {
                e.preventDefault();
                handlePreviousPage();
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <li
              key={pageNum}
              className={`page-item ${pageNum === page ? "active" : ""}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(pageNum);
                }}
              >
                {pageNum}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${page === totalPages ? "disabled" : ""}`}
          >
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={(e) => {
                e.preventDefault();
                handleNextPage();
              }}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TravelList;