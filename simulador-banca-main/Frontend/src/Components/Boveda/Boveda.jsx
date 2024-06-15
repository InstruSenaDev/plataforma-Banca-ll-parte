import React from "react";
import inicio2 from "../../assets/Img/Login/Inicio2.png";
import "boxicons";
//max-w-1/20 sm:max-w-1/4 h-auto
const Boveda = () => {
  return (
    <div className="max-w-2x2 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-[40%] mb-4 sm:mb-0">
          <img src={inicio2} alt="" className="object-cover w-full" />
        </div>



        <div className="w-full sm:w-1/2">
          {/* card1 */}
          <div className="w-full max-w-full px-3 mb-6 sm:w-full sm:flex-none xl:mb-0 xl:w-full">
            <div className="relative flex flex-col min-w-0 break-words bg-DarkSlate shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto p-4">
                <div className="flex flex-row -mx-3 items-center">
                  <div className="flex-none w-2/3 max-w-full px-3">
                    <div>
                      <div className="mb-2 w-12 h-12 text-center bg-beige from-blue-500 to-violet-500 rounded-md">
                        <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"><box-icon name='credit-card' color='#0a8e4d' ></box-icon></i>
                      </div>
                      <p className="mb-0 font-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-normal uppercase text-white dark:opacity-60">
                        Saldo Total de Bóveda                      </p>
                      <h5 className="mb-0 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                        99.900.000,00
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 ml-auto mr-0">
            <button className="w-11/12 mt-4 flex items-center justify-center px-3 py-1.5 bg-transparent border border-emerald text-emerald rounded-md focus:outline-none focus:bg-white mx-6">
              <box-icon name='wallet' color='#1F9254' className="mr-2"></box-icon>
              <span>Consignar</span>
            </button>
            <button className="w-11/12 mt-4 flex items-center justify-center px-3 py-1.5 bg-transparent border border-red text-red rounded-md focus:outline-none focus:bg-white mx-6">
              <box-icon name='wallet' color='red' className="mr-2"></box-icon>
              <span>Retirar</span>
            </button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Boveda;
