// import { useState } from "react";
// import TravelList from "../components/travel/travel-list/travel-list";
// import SearchBar from "../components/ui/search-bar/search-bar";

// function HomePage() {
//   const [activeTab, setActiveTab] = useState("featured");

//   return (
//     <>
//       <div className="container mt-4">
//       <div>
//         <SearchBar className="container mt-4"/>
//       </div>

//         {/* Pestañas */}
//         <ul className="nav nav-tabs">
//           <li className="nav-item">
//             <button
//               className={`nav-link ${activeTab === "featured" ? "active" : ""}`}
//               onClick={() => setActiveTab("featured")}
//             >
//               Featured travel blogs
//             </button>
//           </li>
//           <li className="nav-item">
//             <button
//               className={`nav-link ${activeTab === "newest" ? "active" : ""}`}
//               onClick={() => setActiveTab("newest")}
//             >
//               Newest travel blogs
//             </button>
//           </li>
//           <li className="nav-item">
//             <button
//               className={`nav-link ${activeTab === "bloggers" ? "active" : ""}`}
//               onClick={() => setActiveTab("bloggers")}
//             >
//               Bloggers of the week
//             </button>
//           </li>
//         </ul>

//         {/* Contenido de las pestañas */}
//         <div className="tab-content mt-3 p-3 border rounded custom-tab-content">
//           {activeTab === "featured" && <TravelList category="featured" />}
//           {activeTab === "newest" && <TravelList category="newest" />}
//           {activeTab === "bloggers" && <TravelList category="bloggers" />}
//         </div>
//       </div>
      
//     </>
//   );
// }

// export default HomePage;

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import TravelList from "../components/travel/travel-list/travel-list";
import SearchBar from "../components/ui/search-bar/search-bar";

function HomePage() {
  const [activeTab, setActiveTab] = useState("featured");
  // const navigate = useNavigate();

  return (
    <>
      {/* Banner */}
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
        <p className="fs-4">Discover new places, experiences, and adventures.</p>
        {/* <button
          className="btn btn-primary mt-3 px-4 py-2"
          onClick={() => navigate("/travels")}
        >
          Start Exploring
        </button> */}
      </div>

      <div className="container mt-4">
        <SearchBar className="container mt-4" />

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
