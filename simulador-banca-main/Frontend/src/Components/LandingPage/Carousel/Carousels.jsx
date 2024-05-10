import React from "react";
import FrontImage from "../../../assets/Img/Main_Image.svg";
import ImagenPrueba from "../../../assets/Img/UsoVario/InfoPersonal.svg";
import operacionesInternacionales from "../../../assets/Img/UsoVario/Internet.svg";
import personalinfo from "../../../assets/Img/UsoVario/MainInfo.svg";
import economicaLaboral from "../../../assets/Img/UsoVario/Support.svg";
import tributaria from "../../../assets/Img/UsoVario/SelectInfo.svg";
import { Carousel } from "flowbite-react";

export const Carousels = () => {
  return (
    <>
      {/* <div className="flex place-content-center justify-center w-full opac">

                <div id="controls-carousel" className="relative w-11/12 mt-2" data-carousel="static">
               
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                     
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={ImagenPrueba} className="absolute w-1/4  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                     
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <img src={operacionesInternacionales} className="absolute block w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
          
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={economicaLaboral} className="absolute block w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                 
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={personalinfo} className="absolute block w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={tributaria} className="absolute block w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                    </div>

                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green/30 dark:bg-gray-800/30 group-hover:bg-green/40 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green/30 dark:bg-gray-800/30 group-hover:bg-green/40 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div> */}
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-5/6 flex justify-center">
        <Carousel slide={false} className="bg-green-400   ">
          <img
            src={ImagenPrueba}
            className="absolute w-1/4 rounded -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />

          <img
            src={operacionesInternacionales}
            className="absolute    block w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />

          <img
            src={economicaLaboral}
            className="absolute block w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />

          <img
            src={personalinfo}
            className="absolute block w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />

          <img
            src={tributaria}
            className="absolute block w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
};
