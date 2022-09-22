import React from "react";
import Category from "../component/Category/Category";
import Proposition from "../component/Proposition/Proposition";
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
        <Proposition/>
      </div>
  );
};

export default Home;
