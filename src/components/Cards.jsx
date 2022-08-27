import React from "react";
import OrangeOne from "../assets/orange-one.png";
import OrangeTwo from "../assets/orange-two.png";
import OrangeThree from "../assets/orange-three.png";

const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full  py-10 px-5 md:py-[100px] md:px-10">
      <h1 className="font-['Poppins'] text-2xl md:text-5xl">
        Choose your <span className="text-[#f56400]">Orange</span>
      </h1>

      <div className="flex md:flex-row flex-col">
        <div className="w-full mt-10 p-5 flex justify-center">
          <div className="bg-[#f3f3f3] w-[320px] rounded-2xl flex flex-col items-center shadow-2xl">
            <img src={OrangeOne} className="w-[200px] my-6" />
            <div className="px-5">
              <h1 className="font-bold font-['Poppins'] tracking-wider">
                Orange 1
              </h1>
              <span className="font-['Poppins'] text-[13px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </span>
            </div>
            <h1 className="font-['Poppins'] tracking-wider text-[#f56400] my-3">
              Show more
            </h1>
          </div>
        </div>

        <div className="w-full mt-10 p-5 flex justify-center">
          <div className="bg-[#f3f3f3] w-[320px] rounded-2xl flex flex-col items-center shadow-2xl">
            <img src={OrangeTwo} className="w-[200px] my-6" />
            <div className="px-5">
              <h1 className="font-bold font-['Poppins'] tracking-wider">
                Orange 1
              </h1>
              <span className="font-['Poppins'] text-[13px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </span>
            </div>
            <h1 className="font-['Poppins'] tracking-wider text-[#f56400] my-3">
              Show more
            </h1>
          </div>
        </div>

        <div className="w-full mt-10 p-5 flex justify-center">
          <div className="bg-[#f3f3f3] w-[320px] rounded-2xl flex flex-col items-center shadow-2xl">
            <img src={OrangeThree} className="w-[200px] my-6" />
            <div className="px-5">
              <h1 className="font-bold font-['Poppins'] tracking-wider">
                Orange 1
              </h1>
              <span className="font-['Poppins'] text-[13px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </span>
            </div>
            <h1 className="font-['Poppins'] tracking-wider text-[#f56400] my-3">
              Show more
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
