import React from "react";
import pfpAbout from "../assets/pfpAbout.jpeg";

function About() {
  return (
    <section id="about" className="container mx-auto py-20 flex flex-col items-center">
      <h2 className="text-3xl font-medium text-center pt-5 text-gray-800 font-rubik">
        A Brief Introduction
      </h2>
      <div className="flex items-center w-2/3 py-10">
        <img src={pfpAbout} alt="Head Shot" className="w-40 h-40 rounded-xl"/>
        <p className="text-left mt-4 text-lg text-gray-600 px-5 font-raleway">
          Welcome to my portfolio! My name is Sung Min and I'm a developer specializing in front-end development and mobile applications. 
          I'm currently a first year student at <a href="https://www.fanshawec.ca/" className="text-red-500">Fanshawe College </a> 
          pursuing an advanced diploma in <a href="https://www.fanshawec.ca/programs/cpa3-computer-programming-and-analysis-co-op/next" className="text-red-500">
            computer programming and analysis</a>.
          I strive towards a challenging and motivational career that will keep me learning new technologies and develop impactful software.
          {/*implement card carousel of my life journey*/}
        </p>       
      </div>
      <p className="text-center mt-4 text-lg text-gray-600 px-5 font-raleway">Some of my hobbies include planting trees and swimming. </p>
    </section>
  );
}

export default About;
