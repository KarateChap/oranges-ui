import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navHandler = () => {
    setNav((preNav) => !preNav);
  };

  return (
    <>
      <div className="w-screen h-[60px] absolute flex items-center z-50">
        <div className="h-full items-center w-full">
          <div className="flex items-center justify-between h-full w-full">
            <div className="flex items-center">
              <img src={Logo} alt="" className="md:ml-[150px] md:mr-20 mx-5 select-none"/>
              <ul className="md:flex hidden text-[#f56400]">
                <li className="mx-10 font-medium cursor-pointer select-none hover:bg-orange-200 px-5 py-2 rounded-md">Home</li>
                <li className="mx-10 font-medium cursor-pointer select-none hover:bg-orange-200 px-5 py-2 rounded-md">Feature</li>
                <li className="mx-10 font-medium cursor-pointer select-none hover:bg-orange-200 px-5 py-2 rounded-md">Contacts</li>
              </ul>
            </div>

            <div onClick={navHandler}>
              {!nav ? (
                <MenuIcon className="w-5 md:hidden mx-5" />
              ) : (
                <XIcon className="w-5 md:hidden mx-5" />
              )}
            </div>
          </div>
        </div>
      </div>
      {nav && (
        <div className="md:hidden pt-20 select-none absolute h-full w-full z-20">
          <div className=" bg-white w-full h-full">
            <ul className="text-[#f56400] flex-col text-center mx-10">
              <li className="font-medium mb-5 border-b-gray-100 border-b-2 pb-5 cursor-pointer">
                Home
              </li>
              <li className="font-medium mb-5 border-b-gray-100 border-b-2 pb-5 cursor-pointer">
                Feature
              </li>
              <li className="font-medium border-b-gray-100 border-b-2 pb-5 cursor-pointer">
                Contacts
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
