import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Loader } from "./components";
import "./styles/index.css";
import Router from "./Routes";
import { BrowserRouter } from "react-router-dom";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Suspense
          fallback={
            <div className="loader">
              <Loader />
            </div>
          }
        >
          <Router />
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
