import React from "react";
import Category from "../component/Category/Category";
import Slider from "../component/Slider/Slider";
import SliderSearch from "../component/SliderSearch";
import Trusted from "../component/Trusted/Trusted";

const Home = () => {
  return (
      <div>
        <Slider />
        <SliderSearch />
        <Trusted />
        <Category />
      </div>
  );
};

export default Home;
