import React from "react";
import Category from "../component/Category/Category";
import Explore from "../component/Explore/Explore";
import Proposition from "../component/Proposition/Proposition";
import Slider from "../component/Slider/Slider";
import SliderSearch from "../component/SliderSearch";
import Trusted from "../component/Trusted/Trusted";
import Vote from "../component/Vote/Vote";

const Home = () => {
  return (
      <div>
        <Slider />
        <SliderSearch />
        <Trusted />
        <Category />
        <Proposition/>
        <Vote/>
        <Explore/>
      </div>
  );
};

export default Home;
