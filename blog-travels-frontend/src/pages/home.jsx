import { useState } from "react";
import TravelList from "../components/travel/travel-list/travel-list";
import SearchBar from "../components/ui/search-bar/search-bar";
import PopularDestinations from "../components/popular/PopularDestinations";

function HomePage() {
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <>
      {/* Banner passport image */}
      <div
        className="banner d-flex flex-column align-items-center justify-content-center text-white text-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h1 className="fw-bold">Explore Amazing Travel Stories</h1>
        <p className="fs-4">
          Discover new places, experiences, and adventures.
        </p>
      </div>

      {/* Contenedor con dos columnas */}
      <div className="row mt-5 p-5">
        {/* Contenido principal */}
        <div className="col-md-8">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "featured" ? "active" : ""
                }`}
                onClick={() => setActiveTab("featured")}
              >
                Featured travel blogs
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "newest" ? "active" : ""}`}
                onClick={() => setActiveTab("newest")}
              >
                Newest travel blogs
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "bloggers" ? "active" : ""
                }`}
                onClick={() => setActiveTab("bloggers")}
              >
                Bloggers of the week
              </button>
            </li>
          </ul>

          <div className="tab-content mt-3 p-3 border rounded custom-tab-content">
            {activeTab === "featured" && <TravelList category="featured" />}
            {activeTab === "newest" && <TravelList category="newest" />}
            {activeTab === "bloggers" && <TravelList category="bloggers" />}
          </div>
        </div>

        {/* columna ppal 2 */}
        <div className="col-md-4">
          {/* Search bar */}
          <div className="container mt-5">
            <SearchBar />

            {/* Destinos Populares */}
            <PopularDestinations />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
