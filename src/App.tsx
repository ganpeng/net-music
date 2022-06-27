import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { useRoutes } from "react-router-dom";
import { QUERY_CLIENT_OPTIONS } from "./constants";
import { TracksContextProvider } from "./context";
import routes from "./router/routes";
import "./app.scss";

function App() {
  const element = useRoutes(routes);
  return (
    <ChakraProvider>
      <QueryClientProvider client={new QueryClient(QUERY_CLIENT_OPTIONS)}>
        <TracksContextProvider>
          <div className="App">{element}</div>
        </TracksContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
