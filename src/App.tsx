import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";

function App() {
  const element = useRoutes(routes);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="App">{element}</div>
    </QueryClientProvider>
  );
}

export default App;
