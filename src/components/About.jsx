import React from "react";
import AboutImage from "../assets/about.png";

const About = () => {
  return (
    <div className="w-full md:h-[60vh]  flex flex-wrap justify-center gap-[100px]  md:pb-20 pb-20">
      <img src={AboutImage} className="w-[600px] md:mt-[-70px]" />
      <div className="my-auto  h-40 text-center md:text-left flex justify-center">
        <div className="md:w-[650px] w-[90%]" >
          <h1 className="font-['Poppins'] tracking-wider md:text-6xl text-3xl">
            About Oranges
          </h1>
          <h1 className="md:text-6xl text-3xl md:text-left text-center mb-7 md:mt-[-60px] mt-[-20px] md:ml-0 ml-4 text-[#f56400] md:tracking-[-0.05em] tracking-[0.02]">
            ______________
          </h1>
          <h2 className="font-['Poppins'] md:text-2xl text-1xl ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
