import React from "react";
import Logo from "../../assets/Img/Logos/ClarBank LogoOnly.svg";
import Avatar from "../../assets/Img/UsoVario/Cristiano.png";

const Transfers = () => {
  return (
    <div className="flex flex-wrap mt-6 -mx-3">
      <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
          <div className="p-4 pb-0 mb-0 rounded-t-4">
            <div className="flex justify-between">
              <h6 className="mb-2 dark:text-white">Cajeros</h6>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="flex flex-col">
              <div className="p-2 align-middle bg-transparent w-full whitespace-nowrap dark:border-white/40">
                <div className="flex justify-center items-center px-2 py-1">
                  <div className="ml-6 flex items-center">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                      ID
                    </p>
                   
                  </div>
                  <div className="ml-6 flex items-center">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                      Nombre
                    </p>
                
                  </div>
                  <div className="ml-6 flex items-center">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                      Saldo
                    </p>
                 
                  </div>
                  <div className="ml-6 flex items-center">
                    <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                      Acción
                    </p>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfers;
