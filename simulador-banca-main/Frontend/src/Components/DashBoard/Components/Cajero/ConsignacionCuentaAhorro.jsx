import React from "react";

const ConsgnacionCuentaAhorro = ({ openConsignacion, closeModal }) => {
  return (
    <>
      {openConsignacion && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="rounded-lg bg-white shadow-sm w-full max-w-md">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Consignar
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent transition hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
            <div className="px-6 space-y-4">
              <div className="flex justify-between flex-col w-full gap-y-2">
                <div className="space-y-2 w-full md:w-auto">
                  <label
                    className="text-sm text-gray-600 font-normal leading-none"
                    htmlFor="accountNumber"
                  >
                    Número de cuenta de ahorro
                  </label>
                  <input
                    id="accountNumber"
                    name="accountNumber"
                    type="number"
                    placeholder="Número de cuenta"
                    className="flex h-10 w-full rounded-md border-gray-400 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus-visible:outline-none"
                    required
                  />
                </div>

                <div className="space-y-2 w-full md:w-auto">
                  <label
                    className="text-sm text-gray-600 font-normal leading-none"
                    htmlFor="accountOwner"
                  >
                    Nombre del dueño de la cuenta
                  </label>
                  <input
                    id="accountOwner"
                    type="text"
                    placeholder="Nombre del dueño"
                    disabled
                    className="flex h-10 w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm text-gray-600 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="saldo"
                  >
                    Saldo a consignar
                  </label>
                  <input
                    id="saldo"
                    type="number"
                    min="0"
                    step="1000"
                    placeholder="Ingrese saldo a consignar"
                    className="flex h-10 w-full rounded-md border-gray-400 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 px-4 gap-2">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-white text-sm font-medium transition-colors bg-emerald-600 hover:bg-emerald-700 h-10 px-6 py-2 ml-auto"
                type="submit"
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsgnacionCuentaAhorro;
