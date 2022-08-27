import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="h-full lg:w-[60vw] w-full md:w-full bg-[url('./assets/dots.png')] bg-no-repeat bg-cover bg-[#f6f6f6]">
        <div className="w-full h-full  flex justify-center items-center">
          <div className="md:w-[850px] w-[500px] md:h-[480px] h-[500px] mx-7">
            <h1 className="font-['Impact'] tracking-wider md:text-[80px] text-4xl">
              FRESH{" "}
              <span className="text-[#f56400]">
                <Typed
                  strings={["ORANGES", "CITRUS", "FRUIT"]}
                  typeSpeed={50}
                  loop
                />
              </span>
            </h1>
            <button className="text-[10px] md:text-1xl md:mt-20 text-2xl font-['Poppins'] bg-[#f56400] py-1 px-6 md:py-3 md:px-10 text-white tracking-wide rounded-full mt-7 hover:scale-105 ease-in-out duration-75 shadow-sm shadow-[#ff964f] hover:shadow-lg hover:shadow-[#ffccab]">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className=" h-full md:w-[40vw] w-[0vw] bg-[url('./assets/header.png')] bg-no-repeat bg-cover hidden lg:flex"></div>
    </div>
  );
};

export default Hero;
