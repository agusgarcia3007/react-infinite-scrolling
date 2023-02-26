import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import Loader from "./components/Loader";
import "./styles/index.scss";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Suspense
        fallback={
          <div className="loader">
            <Loader />
          </div>
        }
      >
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
