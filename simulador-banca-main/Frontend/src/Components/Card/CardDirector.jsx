import React from "react";
import "boxicons";

const CardDirector = () => {
  return (
    <div className="w-full px-6 py-6 mx-auto">
      {/* card1 */}
      <div className="w-full h-48 max-w-full px-3 mb-6 sm:flex-none xl:mb-0">
        <div className="h-full relative flex flex-col min-w-0 break-words bg-DarkSlateGray shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3 items-center">
              <div className="flex-none w-2/3 h-full max-w-full px-3">
                <div>
                  <div className="mb-2 w-12 h-12 text-center bg-beige from-blue-500 to-violet-500 rounded-md">
                    <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white">
                      <box-icon name='credit-card' color='#325259'></box-icon>
                    </i>
                  </div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-white dark:opacity-60">
                    Saldo T. en bóveda
                  </p>
                  <h5 className="mb-0 text-2xl font-bold text-white">
                    99.900.000,00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDirector;
