import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { useRoutes } from "react-router-dom";
import { QUERY_CLIENT_OPTIONS } from "./constants";
import { TracksContextProvider } from "./context";
import routes from "./router/routes";
import "./app.scss";

function App() {
  const element = useRoutes(routes);
  return (
    <QueryClientProvider client={new QueryClient(QUERY_CLIENT_OPTIONS)}>
      <TracksContextProvider>
        <div className="App">{element}</div>
      </TracksContextProvider>
    </QueryClientProvider>
  );
}

export default App;
