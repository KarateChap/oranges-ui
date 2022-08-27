import React from "react";
import VideoImage from "../assets/Video.png";
import Arrow from "../assets/arrow.png";

const Video = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-[73vh] bg-[#e9c24c] lg:px-10 lg:py-10">
      <div className="md:m-10 m-10 mt-[70px] md:mt-[90px]">
        <div className="relative md:text-left text-center">
          <h1 className="font-['Impact'] md:text-[100px] text-[70px] text-white md:m-[100px] mt-[10px] md:leading-[120px] leading-[90px]">
            WATCH THIS VIDEO
          </h1>
          <img
            src={Arrow}
            className="hidden 2xl:flex w-20 text-[#db4c01] absolute left-[370px] top-[140px]"
          />
        </div>
      </div>
      <div className="md:m-10 m-10">
        <img src={VideoImage} />
      </div>
    </div>
  );
};

export default Video;
