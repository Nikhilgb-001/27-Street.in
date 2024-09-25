import { Route, Routes } from "react-router-dom";
import React from "react";
import Products from "../components/Products";
import OurProducts from "../components/OurProducts";
import Reviews from "../components/Reviews";
const Routes = () => {
  return (
    <Routes>
      <Route path="/best-sellers" element={<OurProducts />} />
      <Route path="/products" element={<Products />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
};

export default Routes;
