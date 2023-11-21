import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const App = () => {
  return (
    <div>
      <Routes>
        {routes &&
          routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              ></Route>
            );
          })}
      </Routes>
    </div>
  );
};

export default App;
