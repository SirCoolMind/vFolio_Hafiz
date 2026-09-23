import React from "react";
import ReactDOM from "react-dom/client";
import { AgustinPortfolio } from "./components/agustin/AgustinPortfolio";
import { AboutView } from "./components/agustin/AboutView";
import { WorkView } from "./components/agustin/WorkView";
import { ServicesView } from "./components/agustin/ServicesView";
import { ContactView } from "./components/agustin/ContactView";
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

  return <AgustinPortfolio />;
};

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
