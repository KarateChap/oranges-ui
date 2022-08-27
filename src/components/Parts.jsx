import React from "react";
import OrangeParts from "../assets/parts-2.png";
const Parts = () => {
  return (
    <div className="lg:px-[150px] lg:py-[90px] px-[50px] py-[50px] h-[70vh] flex justify-center items-center">
      <div className=" w-full h-[40vh] md:h-full relative lg:w-[80%] ">
        <div className="md:w-[650px] w-full">
          <h1 className="font-['Poppins'] tracking-wider md:text-6xl text-3xl ">
            Orange Parts
          </h1>
          <h1 className="md:text-6xl text-3xl md:text-left mb-7 md:mt-[-40px] mt-[-20px] md:ml-0 ml-4 text-[#f56400] md:tracking-[-0.05em] tracking-[0.02]">
            ______________
          </h1>
          <h2 className="font-['Poppins'] md:text-2xl text-1xl lg:w-[500px] w-full">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </h2>
        </div>
        <img
          src={OrangeParts}
          className="lg:absolute lg:right-0 lg:bottom-0 lg:w-[700px] mt-10 lg:mt-0"
        />
      </div>
    </div>
  );
};

export default Parts;
