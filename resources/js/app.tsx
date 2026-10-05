import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { PortfolioView } from "./components/portfolio/PortfolioView";

// Secondary pages are split into their own chunks; the home page doesn't pay for them.
const AboutView = lazy(() => import("./components/portfolio/AboutView").then((m) => ({ default: m.AboutView })));
const WorkView = lazy(() => import("./components/portfolio/WorkView").then((m) => ({ default: m.WorkView })));
const ContactView = lazy(() => import("./components/portfolio/ContactView").then((m) => ({ default: m.ContactView })));
import "../css/app.css";

const App: React.FC = () => {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path === "/about") {
    return <AboutView />;
  }
  if (path === "/work") {
    return <WorkView />;
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
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </React.StrictMode>
  );
}
