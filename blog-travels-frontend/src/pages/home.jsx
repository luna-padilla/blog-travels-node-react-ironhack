import { useState } from "react";
import TravelList from "../components/travel/travel-list/travel-list";
import SearchBar from "../components/ui/search-bar/search-bar";

function HomePage() {
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <>
      <div className="container mt-4">
      <div>
        <SearchBar className="container mt-4"/>
      </div>

        {/* Pestañas */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "featured" ? "active" : ""}`}
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
              className={`nav-link ${activeTab === "bloggers" ? "active" : ""}`}
              onClick={() => setActiveTab("bloggers")}
            >
              Bloggers of the week
            </button>
          </li>
        </ul>

        {/* Contenido de las pestañas */}
        <div className="tab-content mt-3 p-3 border rounded custom-tab-content">
          {activeTab === "featured" && <TravelList category="featured" />}
          {activeTab === "newest" && <TravelList category="newest" />}
          {activeTab === "bloggers" && <TravelList category="bloggers" />}
        </div>
      </div>
      
    </>
  );
}

export default HomePage;
