import React from "react";
import Logo from "../../assets/Img/Logos/ClarBank LogoOnly.svg";
import "boxicons";

const Card = () => {
  return (
    <div className="w-full px-6 py-6 mx-auto">
    <div className="flex flex-wrap -mx-3">
      {/* row 1 */}
      {/* card1 */}
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-DarkSlate shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3 items-center">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <div className="mb-2 w-12 h-12 text-center bg-beige from-blue-500 to-violet-500 rounded-md">
                    <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"><box-icon name='credit-card' color='#0a8e4d' ></box-icon></i>
                  </div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-white dark:opacity-60">
                    Saldo Total
                  </p>
                  <h5 className="mb-0 text-2xl font-bold text-white">
                    100,000.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card2 */}
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-darkGray shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3 items-center">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <div className="mb-2 w-12 h-12 text-center bg-beige from-blue-500 to-violet-500 rounded-md">
                    <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"><box-icon name='credit-card-alt' color='#0a4f8e' ></box-icon></i>
                  </div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-white dark:opacity-60">
                    Saldo T. en Bóveda
                  </p>
                  <h5 className="mb-0 text-2xl font-bold text-white">
                    99.900.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card3 */}
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
  <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border h-full"> {/* Añadí la clase h-full aquí */}
  <div className="flex-auto p-4 flex flex-col justify-center items-center"> 
      <div className="flex flex-row -mx-3 items-center">
        <div className="flex-none w-full max-w-full px-3">
          {/* Aquí están los botones */}
          <div className="flex flex-col">
            <button className="mb-2 bg-red hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg w-full flex items-center justify-center">
            <box-icon name='wallet' color='#ffffff' ></box-icon> Retirar de Bóveda
            </button>
            <button className="bg-DarkSlate hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg w-full flex items-center justify-center">
            <box-icon name='wallet' color='#ffffff' ></box-icon> Consignar a Bóveda
            </button>
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

export default Card;
