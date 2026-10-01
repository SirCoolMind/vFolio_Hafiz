import React from "react";
import ReactDOM from "react-dom/client";
import { PortfolioView } from "./components/portfolio/PortfolioView";
import { AboutView } from "./components/portfolio/AboutView";
import { WorkView } from "./components/portfolio/WorkView";
import { ServicesView } from "./components/portfolio/ServicesView";
import { ContactView } from "./components/portfolio/ContactView";
import "../css/app.css";

const App: React.FC = () => {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path === "/about") {
    return <AboutView />;
  }
  if (path === "/work") {
    return <WorkView />;
  }
  if (path === "/services") {
    return <ServicesView />;
  }
  if (path === "/contact") {
    return <ContactView />;
  }

  return <PortfolioView />;
};

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
