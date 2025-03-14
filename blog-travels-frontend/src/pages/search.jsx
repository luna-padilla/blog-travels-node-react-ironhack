import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchTravels } from "../services/api-service";
import TravelItem from "../components/travel/travel-item/travel-item";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      searchTravels(query)
        .then(setResults)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <h2>Search results for: "{query}"</h2>

      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="row">
          {results.map((travel) => (
            <div key={travel._id} className="col-md-4 mb-3">
              <TravelItem travel={travel} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;