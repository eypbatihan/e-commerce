import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
