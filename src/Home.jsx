import React from "react";
import Web from "../src/Images/wow.png";

import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Learn new technologies with "
        imgsrc={Web}
        visit="/contact"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
