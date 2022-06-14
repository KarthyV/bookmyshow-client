import React from "react";
import ControlledCarousel from "../Carousel";
import Footer from "../Footer";
import PremiumCard from "../PremiumCard";

const Home = () => {
  return (
    <div>
      <ControlledCarousel />
      <div className="premCol">
        <h1>Premium Collections : </h1>
        <PremiumCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
