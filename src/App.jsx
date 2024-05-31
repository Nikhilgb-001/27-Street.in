import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Stores from "./components/Stores";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import OurProducts from "./components/OurProducts";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full relative h-screen font-['Poppins'] bg-white text-zinc-900">
      <Navbar />
      <Home />
      <Products />
      <OurProducts />
      <Reviews />
      <Stores />
      <Footer />
    </div>
  );
};

export default App;
