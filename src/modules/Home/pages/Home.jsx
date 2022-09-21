import React from "react";
import Slider from "../component/Slider/Slider";
import SliderSearch from "../component/SliderSearch";

const Home = () => {
  return (
    <div>
      <div className="position-absolute" style={{ top: "0" }}>
        <Slider />
        <SliderSearch />
      </div>
    </div>
  );
};

export default Home;
