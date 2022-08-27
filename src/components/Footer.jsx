import React from "react";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-[#e9c24c] h-[20vh] flex flex-col justify-center text-center">

        <h1 className="font-['Poppins'] text-white tracking-wide">Ⓒ Copyright 2022 - 2023</h1>
        <h1 className="font-['Poppins'] text-white mt-2">All rights reserved, Powered by Itlog</h1>
      <div className="flex gap-2 w-full justify-center mt-4 text-white">
        <FaFacebook size={20} />
        <FaTwitter size={20} />
        <FaInstagramSquare size={20} />
      </div>
    </div>
  );
};

export default Footer;
