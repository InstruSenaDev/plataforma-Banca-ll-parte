import React from "react";
import inicio2 from "../../../../assets/Img/Login/Inicio2.png";

const Boveda = () => {
  return (
    <>
      <div className="container p-4 mx-auto" style={{ minHeight: "87vh" }}>
        <div className="flex justify-center items-center flex-col">
          <div className="w-full sm:w-1/2">
            <div className="w-full sm:w-full sm:flex-none">
              <div className="flex px-4 py-8 flex-col bg-DarkSlate rounded-md bg-clip-border">
                <div>
                  <h1 className="text-xl font-normal text-white dark:opacity-60">
                    Saldo Total de Bóveda
                  </h1>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-4xl font-bold text-white">
                      $ 100.000.000,00
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 p-2 bg-transparent border border-emerald-500 text-emerald-500 rounded-md transition hover:bg-emerald-500 group">
              <p className="font-semibold text-xl group-hover:text-white">
                Consignar
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boveda;
