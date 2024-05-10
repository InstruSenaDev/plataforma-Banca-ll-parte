import React from "react";
import { Link } from "react-router-dom";
import TopLogo from "../../../assets/Img/Logos/ClarBank LogoOnly.svg";
import nameLogo from "../../../assets/Img/Logos/ClarBank Name.svg";

export const TopNavbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-xl">
        <div className="max-w-screen-x flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={TopLogo} className="h-8" alt="ClarBank" />
            <span>
              <img src={nameLogo} alt="" className="h-4" />
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/Login">
              <button
                type="button"
                className="text-black bg-green-600 hover:bg-green focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
