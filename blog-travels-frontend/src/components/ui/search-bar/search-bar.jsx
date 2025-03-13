import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="container my-4">
      <form
        className="input-group"
        onSubmit={handleSearch}
        role="search"
      >
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="What are you looking for?"
          aria-label="Search"
          aria-describedby="button-search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn btn-lg btn-browser"
          type="submit"
          id="button-search"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

