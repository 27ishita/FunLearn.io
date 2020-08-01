import React from "react";
import Ab from "../src/Images/about.png";

import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="About "
        imgsrc={Ab}
        visit="/contact"
        btnname="Contact now"
      />
    </>
  );
};

export default About;
