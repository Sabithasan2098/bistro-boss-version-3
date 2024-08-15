import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-lg mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </StrictMode>
);
