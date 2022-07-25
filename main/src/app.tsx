import React from "react";
import { Route, Routes } from "react-router-dom";

import MicroFrontend from "./lib/Microfrontend";

const ProductAppRoutes = ["/"];

const ProductApp = () => {
  return <MicroFrontend host={"http://localhost:3002"} name="CricketApp" />;
};

function App() {
  return (
    <Routes>
      {ProductAppRoutes.map((route, i) => (
        <Route key={i} path={route} element={<ProductApp />} />
      ))}
    </Routes>
  );
}

export default App;
