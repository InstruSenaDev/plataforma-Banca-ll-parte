import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ModalMovimientoCliente = ({
  openMovimientos,
  setOpenMovimientos,
  idClienteDetails,
  setIdClienteDetails,
}) => {
  const closeMovimientos = () => {
    setIdClienteDetails(null);
    setOpenMovimientos(false);
  };

  return (
    <>
      {openMovimientos && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="rounded-lg bg-white shadow-sm w-full max-w-md">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="flex items-center justify-between">
                <h3 className="whitespace-nowrap text-2xl font-semibold">
                  Movimientos
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent transition hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={closeMovimientos}
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
              <div className="flex ">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMovimientoCliente;
