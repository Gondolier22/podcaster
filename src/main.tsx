import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./adapters/routes";
import "./index.css";
import "./libs/i18n"; // Ensure i18n is initialized before rendering
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </HelmetProvider>
);
