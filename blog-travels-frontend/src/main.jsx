import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// import { AuthProvider } from './contexts/auth-context.jsx';
// comentario 
createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
    <App />
    </AuthProvider>
  </Router>
);
