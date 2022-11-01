import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id='about'>
      <H2>About me</H2>
      <p>I love Jesus Christ</p>
      <img src={image} alt='I made this' /> 
    </div>
  )
}

export default About;
